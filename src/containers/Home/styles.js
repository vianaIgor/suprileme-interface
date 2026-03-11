import styled from 'styled-components';
import Background from '../../assets/background.gif';
import BannerHome from '../../assets/banner-home.jpg';

export const Main = styled.main``;

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;
  background-repeat: no-repeat;
  

  h1{
    font-size: 60px;
    color: #f4f4f4;
    position: absolute;
    right: 5%;
    top: 35%;

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
}
`;

export const Container = styled.section`
  background: url('${Background}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  padding-bottom: 70px;
`;
