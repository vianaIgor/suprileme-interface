import Logo from '../../assets/logo_suprileme.png';
import { CartItems, CartResume } from '../../components';
import { Banner, Container, Content, Title, Wave } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <Wave />
        <Wave />
        <Wave />
        <img
          src={Logo}
          alt="logo Suprileme"
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
      </Banner>
      <Title>Confirmar Pedido</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}
