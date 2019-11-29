import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #67b4f5;
  overflow: hidden;
`;
const Box = styled.div`
  align-items: center;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ContentBox = styled.div`
  color: #ffffff;
`;
const Content = styled.div`
  margin-top: 70px;
  padding: 0 20px;
`;
const SubTitle = styled.h2`
  width: 100%;
  font-size: 21px;
  font-weight: bold;
  line-height: 31px;
  letter-spacing: -0.4px;
  text-align: left;
  margin-bottom: 10px;
`;
const Infor = styled.p`
  width: 317px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.3px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 26px;
`;
const AndroidBtn = styled.a`
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
    width: 140px;
    height: 38px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const BgBox = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80% center;
  width: 400px;
  height: 100%;
  background-image: url(${props => props.BgUrl});
`;
const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;
const MhomePresenter = () => (
  <Container>
    <Box>
      <ContentBox>
        <Content>
          <SubTitle>현명한 사람들의 선택, AllA Wallet</SubTitle>
          <Infor>
            이제 에이월드에서 암호화폐를 스테이킹하고, 합리적인 헤택의 수익을
            경험하세요!
          </Infor>
          <ButtonBox>
            <AndroidBtn
              href={"http://allaglobal.com/download/alla.apk"}
              andUrl={require("../../assets/google.svg")}
            />
            <IOSBtn
              onClick={() => alert("준비중입니다.")}
              iosUrl={require("../../assets/apple.svg")}
            />
          </ButtonBox>
        </Content>
      </ContentBox>
      <BgBox BgUrl={require("../../assets/alla_mobile.png")} />
    </Box>
  </Container>
);

MhomePresenter.propTypes = {};

export default MhomePresenter;
