import styled from "styled-components";

import mountain from "../images/mountain.png";
import city from "../images/city.png";
import bg from "../images/bg.jpg";
import comet from "../images/comet.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    z-index: 2;
    background: linear-gradient(to top, #0a2a43, transparent);
  }
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: black;
    mix-blend-mode: color;
  }
`;

const Title = styled.div`
  position: absolute;
  font-size: 5rem;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px black;
  letter-spacing: 1.2rem;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s ease;
  transform: ${(props) =>
    props.scroll && `translate(-50%, ${-50 + props.scroll}%)`};
`;

const Comet = styled.img`
  position: absolute;
  width: 200px;
  bottom: 80%;
  right: 100px;
  transition: 0.2s ease;
  transform: ${(props) =>
    props.scroll &&
    `translate(${props.scroll * -0.55}px, ${props.scroll * 0.55}px)`};
`;

const Bg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: -25%;
  transition: 0.2s ease;
  transform: ${(props) =>
    props.scroll && `translateY(${props.scroll * 0.5}px)`};
`;

const City = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  object-fit: cover;
  object-position: 0 100px;
  z-index: 2;
`;

const Mountain = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  transition: 0.2s ease;
  transform: ${(props) =>
    props.scroll && `translateY(${props.scroll * -0.15}px)`};
`;

const SiteHeader = ({ scroll }) => {
  return (
    <Container>
      <Bg src={bg} scroll={scroll} />
      <Comet src={comet} scroll={scroll} />
      <Mountain src={mountain} scroll={scroll} />
      <City src={city} scroll={scroll} />
      <Title scroll={scroll}>WELCOME</Title>
    </Container>
  );
};

export default SiteHeader;
