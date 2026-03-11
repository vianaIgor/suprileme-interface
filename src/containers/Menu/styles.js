import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animação para o gradiente de fundo
const gradientAnimation = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`;

// Animação para a onda
const waveAnimation = keyframes`
    2% {
        transform: translateX(1);
    }
    25% {
        transform: translateX(-25%);
    }
    50% {
        transform: translateX(-50%);
    }
    75% {
        transform: translateX(-25%);
    }
    100% {
        transform: translateX(1);
    }
`;

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #181818ff;
`;

// Estilo da onda
export const Wave = styled.div`
    background: rgba(97, 165, 217, 0.25);
    border-radius: 1000% 1000% 0 0 ;
    position: absolute;
    width: 200%;
    height: 70em;
    animation: ${waveAnimation} 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    top: 9.2%;
    left: 0;
    z-index: 1;

    &:nth-of-type(2) {
        bottom: -1.25em;
        animation: ${waveAnimation} 18s linear reverse infinite;
        opacity: 0.8;
    }

    &:nth-of-type(3) {
        bottom: -2.5em;
        animation: ${waveAnimation} 20s -1s reverse infinite;
        opacity: 0.4;
    }
`;

export const Banner = styled.div`
    height: 480px;
    width: 100%;
    margin: auto;
    display: flex;
    overflow: auto;
    background: linear-gradient(315deg, rgba(0, 0, 0, 1) 3%, rgba(22, 22, 22, 1) 38%, rgba(62, 62, 62, 1) 68%, rgba(92, 92, 92, 1) 98%);
    animation: ${gradientAnimation} 5s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
    z-index: 0;

    h1 {
        font-size: 3vw;
        margin: 10px;
        line-height: 50px;
        position: absolute;
        color: #fff;
        text-align: center;

        top: 50%;
        right: 5%;

        span {
            display: block;
            color: #fff;
            font-size: 1vw;
            font-weight: 400;

        }
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;
export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? '#fff' : '#696969')};
    font-size: 19px;
    font-weight: 200;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #fff'};

    &:hover {
        color: ${(props) => props.theme.blue};
        opacity: 0.8;
    }

    &:active {
        color: ${(props) => props.theme.blue};
        opacity: 1;
    }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;
`;

export const HomeButton = styled(Link)`
    &:hover {
        transform: scale(1.5);
        transition: transform 0.8s ease;
    }
    &:active {
        transform: scale(1.1);
        transition: transform 0.1s ease;
    }    
    cursor: pointer;
    
`;
