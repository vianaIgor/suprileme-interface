import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundLoginRight from '../../assets/direita.jpg';
import BackgroundLoginLeft from '../../assets/esquerda.jpg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLoginLeft}');
    background-size: cover;
    background-position: center;
    
    height: 100%;
    width: 100%;
    max-width: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const RightContainer = styled.div`
    img {
        width: 60%;
        padding: 40px;
    }
    
    background: url('${BackgroundLoginRight}');
    background-size: cover;
    background-position: center;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    p {
        color: #fff;
        font-size: 18px;
        font-weight: 800;
    }

        a {
            text-decoration: underline;
            cursor: pointer;
        }
`;

export const Title = styled.h2`
    font-size: 30px;
    color: #fff;
    text-align: center;
    

span {
    color: #fff;
    animation: pulsate 0.11s ease-in-out infinite alternate;

@keyframes pulsate {
100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #73F7FB,
      0 0 80px #47f2f8ff,
      0 0 90px #30f1f8ff,
      0 0 100px #16f4fcff,
      0 0 150px #02f2faff;
    }
 0% {
    text-shadow:
      0 0 4px #fff,
      0 0 10px #fff,
      0 0 18px #fff,
      0 0 38px #73F7FB,
      0 0 73px #47f2f8ff,
      0 0 80px #30f1f8ff,
      0 0 94px #16f4fcff,
      0 0 140px #02f2faff;
  }
}
}
    
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const ImputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }
        label {
            font-size: 18px;
            font-weight: 600;
            color: ${(props) => props.theme.white};
        }
    
    p {
        font-size: 14px;
        line-height: 80%;
        color: ${(props) => props.theme.darkRed};
        font-weight: 600;        
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: mone;
    color: ${(props) => props.theme.white};
`;
