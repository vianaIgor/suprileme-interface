import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import Logo from '../../assets/logo_suprileme.png';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
  Container,
  Form,
  ImputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';

export function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail válido por favor.')
        .required('É necessário incluir um e-mail.'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('É necessário incluir uma senha.'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser identicas')
        .required('Confirme sua senha.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 1000);
        toast.success('Conta criada com sucesso!');
      } else if (status === 409) {
        toast.error('E-mail já cadastrado.');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Falha no sistema! tente novamente.');
    }
  };

  return (
    <Container>
      <LeftContainer></LeftContainer>
      <RightContainer>
        <img src={Logo} alt="logo-suprileme" />
        <Title>
          <span>Cadastrar usuário:</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ImputContainer>
            <label>Nome:</label>
            <input type="text" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </ImputContainer>

          <ImputContainer>
            <label>E-mail:</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </ImputContainer>

          <ImputContainer>
            <label>Senha:</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </ImputContainer>

          <ImputContainer>
            <label>Confirmar senha:</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </ImputContainer>
          <Button type="submit">Criar conta</Button>
        </Form>
        <p>
          Já possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
