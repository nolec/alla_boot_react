import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  background-image: linear-gradient(311deg, #348cff, #5ed0d8 80%, #68e0cf);
  overflow: hidden;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    align-items: baseline;
  }
`;
// ----------------------------------
const Title = styled.h1`
  height: 148px;
  font-size: 100px;
  font-weight: bold;
  line-height: 148px;
  text-align: left;
  margin-bottom: 30px;
`;
const Content = styled.div``;
const SubTitle = styled.h2`
  font-size: 38px;
  font-weight: bold;
  line-height: 56px;
  letter-spacing: -0.8px;
  text-align: left;
  margin-bottom: 22px;
`;
const Infor = styled.p`
  width: 530px;
  font-size: 28px;
  font-weight: 500;
  line-height: 41px;
  letter-spacing: -0.6px;
  margin-bottom: 48px;
`;
const AndroidBtn = styled.a`
  display: block;
  background-image: url(${props => props.andUrl});
`;
const IOSBtn = styled.a`
  background-image: url(${props => props.iosUrl});
  cursor: pointer;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 230px;
    height: 60px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
const Slink = styled(Link)``;
const ContentBox = styled.div`
  max-width: 570px;
  position: relative;

  color: #ffffff;
  left: 20%;
  @media (min-width: 768px) and (max-width: 1024px) {
    left: 10%;
    ${Title} {
      font-size: 60px;
      height: 100px;
    }
    ${SubTitle} {
      font-size: 30px;
    }
    ${Infor} {
      font-size: 24px;
    }
    ${ButtonBox} {
    }
  }
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
// --------------------------------------
const BgBox = styled.div`
  z-index: -1;
  position: relative;
  right: -15%;
  width: 70vw;
  @media (min-width: 768px) and (max-width: 1024px) {
    position: absolute;
    width: 1024px;
    left: 25%;
    top: 0%;
    opacity: 0.4;
  }
  @media (max-width: 768px) {
    width: 100vw;
    left: 3%;
    top: unset;
    bottom: -2px;
    opacity: 1;
    position: absolute;
  }
`;
const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;
const useImageSelector = initialSrc => {
  const [src, setSrc] = useState(initialSrc);

  const sensor = event => {
    const {
      currentTarget: {
        screen: { width }
      }
    } = event;
    if (width <= 768) {
      setSrc(require("../../assets/alla_mobile.png"));
    }
  };
  useEffect(() => {
    window.addEventListener("load", sensor);
    window.addEventListener("resize", sensor);
    return () => {
      window.addEventListener("load", sensor);
      window.removeEventListener("resize", sensor);
    };
  }, []);
  return src;
};
const HomePresenter = () => {
  const srcSelector = useImageSelector(require("../../assets/mainBg.png"));
  return (
    <Container>
      <Box>
        <ContentBox>
          <Title>AllA</Title>
          <Content>
            <SubTitle>현명한 사람들의 선택, AllA Wallet</SubTitle>
            <Infor>
              이제 에이월드에서 암호화폐를 스테이킹하고, 합리적인 헤택의 수익을
              경험하세요!
            </Infor>
            <ButtonBox>
              <AndroidBtn
                href={"http://220.85.65.103:9080/allamanager/download/apk"}
                andUrl={require("../../assets/btn_google.svg")}
              />
              <IOSBtn
                onClick={() => alert("준비중입니다.")}
                iosUrl={require("../../assets/btn_apple.svg")}
              />
            </ButtonBox>
          </Content>
        </ContentBox>
        <BgBox>
          <Img
            src={srcSelector}
            // require("../../assets/alla_mobile.png")
            alt="alla-mockup"
          />
        </BgBox>
      </Box>
    </Container>
  );
};

HomePresenter.propTypes = {};

export default HomePresenter;
