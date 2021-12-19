import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import useRepos from "../../hooks/useRepos";
import { getRepos } from "../../webAPI";

import Header from "./Header";

import { LoaderCircle } from "@styled-icons/boxicons-regular";
import { ArrowUpCircle } from "@styled-icons/bootstrap";

const Container = styled.div`
  margin: 0 auto;
  width: 960px;
  padding: 60px 30px 30px 30px;
  background: #1e1e28;
`;

const Body = styled.div`
  margin-top: 40px;
`;

const BodyHeader = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
`;

const ReposBlock = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Repo = styled.div`
  flex: 1;
  margin: 0px 30px 30px 0;
  width: calc((100% - 60px) / 3);
  max-width: calc((100% - 60px) / 3);
  min-width: calc((100% - 60px) / 3);
  height: 250px;
  box-sizing: border-box;
  font-size: 0.8rem;
  padding: 30px;
  background: #2b2b35;
  &:nth-child(3n) {
    margin-right: 0px;
  }
`;

const Title = styled.div`
  color: white;
`;

const Description = styled.div`
  color: grey;
  margin-top: 15px;
  line-height: 1.15rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  min-height: 115px;
`;

const ReadMore = styled.a`
  position: relative;
  display: inline-block;
  margin-top: 25px;
  font-size: 0.6rem;
  text-decoration: none;
  color: #e9c46a;
  font-weight: bold;
  letter-spacing: 1px;
  transition: text-shadow 0.4s ease-in-out;
  cursor: pointer;
  :after,
  :before {
    content: "";
    position: absolute;
    border-width: 6px;
    border-style: solid;
    top: 50%;
    left: 110%;
    margin-left: 0px;
    transition: margin-left 0.4s ease-in-out;
  }
  :after {
    border-color: transparent transparent transparent #e9c46a;
    transform: translate(26%, -50%);
  }
  :before {
    border-color: transparent transparent transparent #2b2b35;
    transform: translate(0, -50%);
    z-index: 1;
  }
  :hover {
    text-shadow: 1px 1px 4px rgba(255, 255, 255, 0.5);
    :after,
    :before {
      margin-left: 5px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoaderCircle = styled(LoaderCircle)`
  width: 20px;
  color: #e9c46a;
  animation: ${rotate} 3s linear infinite;
`;

const LoaderCircleWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease-in-out;
  opacity: ${(props) => (props.loading ? 1 : 0)};
  background: rgb(20.8, 23.1, 33.7);
  background: linear-gradient(
    0deg,
    rgba(20.8, 23.1, 33.7, 0.8) 0%,
    rgba(20.8, 23.1, 33.7, 0.6) 60%,
    rgba(20.8, 23.1, 33.7, 0.4) 80%,
    rgba(20.8, 23.1, 33.7, 0.2) 96%
  );
`;

const StyledArrowUpCircle = styled(ArrowUpCircle)`
  width: 40px;
  color: #ccc;
  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.scroll ? 0.3 : 0.1)};
  cursor: ${(props) => (props.scroll ? "pointer" : "auto")};
`;

const GoTop = styled.div`
  position: fixed;
  bottom: 35px;
  right: 50px;
`;

const NoElseData = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 0px;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 1;
  transition: opacity 0.4s ease;
  opacity: ${(props) => (props.haveElseData ? 0 : 1)};
`;

const SiteRepos = ({ scroll }) => {
  const reposPage = useRef(1);
  const [repos, setRepos] = useRepos(reposPage);
  const [loading, setLoading] = useState(false);
  const [haveElseData, setHaveElseData] = useState(true);
  const goTop = () => {
    if (scroll === 0) return;
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const windowBottomYAxis = scroll + window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    if (windowBottomYAxis < bodyHeight && !haveElseData) {
      setTimeout(() => {
        setHaveElseData(true);
      }, 500);
    }
    if (windowBottomYAxis >= bodyHeight) {
      if (loading || !haveElseData) return;
      setLoading(true);
      reposPage.current += 1;
      (async () => {
        const page = reposPage.current;
        const data = await getRepos(page);
        if (data.length <= 0) {
          reposPage.current -= 1;
          setLoading(false);
          setHaveElseData(false);
          return;
        }
        setRepos((previous) => [...previous, ...data]);
        setLoading(false);
      })();
    }
  }, [scroll, loading, setRepos, haveElseData]);
  return (
    <Container>
      <Header />
      <Body>
        <BodyHeader>My Repositories</BodyHeader>
        <ReposBlock>
          {repos.map((repo, index) => (
            <Repo key={index}>
              <Title>{repo.title}</Title>
              <Description>{repo.description}</Description>
              <ReadMore href={repo.url}>READ MORE</ReadMore>
            </Repo>
          ))}
        </ReposBlock>
        <NoElseData haveElseData={haveElseData}>下面沒有資料囉！</NoElseData>
      </Body>
      <LoaderCircleWrap loading={loading ? 1 : 0}>
        <StyledLoaderCircle />
      </LoaderCircleWrap>
      <GoTop onClick={goTop}>
        <StyledArrowUpCircle scroll={scroll} />
      </GoTop>
    </Container>
  );
};

export default SiteRepos;
