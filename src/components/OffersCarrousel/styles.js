import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-left: 40px;
        padding-bottom: 40px;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.white};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.white};
        left: calc(50% - 28px);
    }
    
`;
