import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
    height: 50px;
    background: linear-gradient(315deg, rgba(0, 0, 0, 1) 3%, rgba(22, 22, 22, 1) 38%, rgba(62, 62, 62, 1) 68%, rgba(92, 92, 92, 1) 98%);
    animation: ${gradientAnimation} 5s ease infinite;
    background-size: 400% 400%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;

    p {
        color: ${(props) => props.theme.white};
        font-size: 12px;
        font-weight: 400;
    }
`;
