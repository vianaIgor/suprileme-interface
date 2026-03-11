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
`;

export const Title = styled.h1`
    font-size: 32px;
    color: ${(props) => props.theme.darkWhite};
    padding: 35px 12px 0;
    text-align: center;
    position: relative;


    color: ${(props) => props.theme.white};
    animation: pulsate 0.11s ease-in-out infinite alternate;

@keyframes pulsate {
100% {
      text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #73c5fbff,
        0 0 80px #49b2f8ff,
        0 0 90px #2da8faff,
        0 0 100px #1a9ff8ff,
        0 0 150px #0097fcff;
      }
0% {
      text-shadow:
        0 0 4px #fff,
        0 0 10px #fff,
        0 0 18px #fff,
        0 0 38px #73c5fbff,
        0 0 73px #49b2f8ff,
        0 0 80px #2da8faff,
        0 0 94px #1a9ff8ff,
        0 0 140px #0097fcff;
    }
  }
`;

export const Content = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 30%;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`;
