import Select from 'react-select';
import styled from 'styled-components';

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
    `;

export const SelectStatus = styled(Select)`
    width: 240px;
`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 28px 0;
    gap: 50px;
`;

export const FilterOption = styled.div`
    cursor: pointer;
    background-color: none;
    border: none;
    color: ${(props) =>
      props.$isActiveStatus ? props.theme.blue : props.theme.darkGray};
    border-bottom: ${(props) =>
      props.$isActiveStatus ? `2px solid ${props.theme.blue}` : 'none'};
    font-size: 18px;
    line-height: 20px;
    padding-bottom: 5px;
`;
