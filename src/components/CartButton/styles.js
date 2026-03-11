import styled from 'styled-components';

export const ContainerButton = styled.button`
    
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    font-size: 30px;

    img {
        width: 50px;
        height: 50px;
    }

    &:hover {
        background-color: ${(props) => props.theme.secondBlack};
    }

`;
