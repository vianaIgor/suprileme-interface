import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    cursor: grab;
    box-shadow: rgba(255, 255, 255) 0px 5px 15px;
        
    div {
        width: 100%;
        height: 120px;
        flex-direction: column;
        justify-content: space-between;
        
        p {
            font-size: 15px;
            color: ${(props) => props.theme.black};
            line-height: 20px;
            font-weight: 800;
            margin-top: 20px;
            text-align: center;
        }

        strong {
            font-size: 28px;
            color: ${(props) => props.theme.black};;
            font-weight: 800;
            line-height: 20px;
            margin-bottom: 10px;
            margin-top: 20px;
            text-align: center;
            align-items: center;
            justify-content: center;
            display: flex;
            text-decoration: 'currency', 'BRL';
        }
    }
`;

export const CardImage = styled.img`
    height: 200px;
`;
