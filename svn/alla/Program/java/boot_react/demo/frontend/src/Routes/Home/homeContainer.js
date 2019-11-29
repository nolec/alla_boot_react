import React from "react";
import HomePresenter from "./homePresenter";
import MhomePresenter from "../MHome/MhomePresenter";
import { isTablet, isMobile } from "react-device-detect";

export default class extends React.Component {
  render() {
    return !isTablet && isMobile ? (
      <MhomePresenter></MhomePresenter>
    ) : (
      <HomePresenter></HomePresenter>
    );
  }
}
