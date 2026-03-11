import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding: 20px;


}
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #fff;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #fff;
        left: calc(50% - 28px);
    }
    
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.$imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    cursor: grab;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 150px;
`;

export const CategoryButton = styled(Link)`
    color: #000;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 10px 15px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 50px;
    text-align: center;
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.blue};
        opacity: 0.8;
    }

    &:active {
        background-color: ${(props) => props.theme.blue};
        opacity: 1;
    }
`;
