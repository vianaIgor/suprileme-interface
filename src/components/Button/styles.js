import styled from 'styled-components';

export const ContainerButton = styled.button`
    min-width: 300px;
    min-height: 60px;
    display: inline-flex;
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1.3px;
    font-weight: 700;
    color: #fff;
    background: #4FD1C5;
    background: linear-gradient(90deg, #73F7FB 0%, #24f1f8ff 100%);
    border: none;
    border-radius: 1000px;
    box-shadow: 12px 12px 24px rgba(79,209,197,.64);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px;
    margin: 35px;

&::before {
    content: '';
    border-radius: 1000px;
    min-width: calc(290px + 12px);
    min-height: calc(50px + 12px);
    border: 6px solid #9aeff1ff;
    box-shadow: 0 0 60px #abf2f5ff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all .3s ease-in-out 0s;
}

&:hover, 
&:focus {
  color: #313133;
  transform: translateY(-6px);
}

&:hover::before, 
&:focus::before {
  opacity: 1;
}

&::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #abf2f5ff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: ring 3s infinite;
}

&:hover::after, 
&:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 1px;
    height: 1px;
    opacity: 1;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}

`;
