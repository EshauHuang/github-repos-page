import styled from "styled-components";

import banner from "../../images/banner.jpg";

const Container = styled.div`
  position: relative;
  display: flex;
  height: 300px;
`;

const BgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(30, 30, 30, 0.5);
  }
`;

const Bg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  max-width: 60%;
  color: white;
`;

const ToResume = styled.a`
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 0.4rem;
  box-sizing: border-box;
  padding: 10px 20px;
  background: #e9c46a;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;

const Description = styled.div`
  position: absolute;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 75px;
`;

const Header = () => {
  return (
    <Container>
      <BgWrap>
        <Bg src={banner} />
      </BgWrap>
      <Description>
        <Title>
          <p>歡迎來到我的創作空間！</p>
          <p>祝您有美好的一天~</p>
        </Title>
        <ToResume href="https://www.cakeresume.com/eshau">我的履歷</ToResume>
      </Description>
    </Container>
  );
};

export default Header;
