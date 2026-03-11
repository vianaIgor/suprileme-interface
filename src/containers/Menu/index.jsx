import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import homeButton from '../../assets/home-button.png';
import logoSuprileme from '../../assets/logo_suprileme.png';
import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import {
  Banner,
  CategoryButton,
  CategoryMenu,
  Container,
  HomeButton,
  ProductsContainer,
  Wave,
} from './styles';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria');

    if (categoryId) {
      return categoryId;
    }
    return 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <Wave />
        <Wave />
        <Wave />
        <img
          src={logoSuprileme}
          alt="Logo Suprileme"
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            top: '25%',
            left: '28%',
            width: '100%',
            maxWidth: '800px',
            height: 'auto',
          }}
        />
        <h1>
          Os melhores
          <br />
          suprimentos
          <br />
          estão aqui!
          <br />
          <span>Para sua nave decolar ainda mais alto.</span>
        </h1>
      </Banner>
      <CategoryMenu>
        <HomeButton to={'/'}>
          <img
            src={homeButton}
            alt="Botão-início"
            width={50}
            height={50}
            style={{ border: 'none', cursor: 'pointer' }}
            background="none"
          ></img>
        </HomeButton>

        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/catalogo',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
