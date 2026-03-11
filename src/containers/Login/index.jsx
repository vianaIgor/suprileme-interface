import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Logo from '../../assets/logo_suprileme.png';
import { Button } from '../../components/Button';
import { useUser } from '../../hooks/UserContext';
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

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido por favor.')
        .required('É necessário incluir um e-mail.'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('É necessário incluir uma senha.'),
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
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados.',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate('/admin/pedidos');
              } else {
                navigate('/');
              }
            }, 1000);
            return 'Autorizado';
          },
        },
        error: 'O e-mail ou a senha estão incorretos.',
      },
    );

    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer></LeftContainer>
      <RightContainer>
        <img src={Logo} alt="logo-suprileme" />
        <Title>
          Bem vindo a <span>Suprileme Informática!</span>
          <br />
          Acesse com seu login e senha.
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
