import React from "react";
import HomePresenter from "./homePresenter";
import MhomePresenter from "../MHome/MhomePresenter";
import { isMobile } from "react-device-detect";

export default class extends React.Component {
  render() {
    return isMobile ? (
      <MhomePresenter></MhomePresenter>
    ) : (
      <HomePresenter></HomePresenter>
    );
  }
}
