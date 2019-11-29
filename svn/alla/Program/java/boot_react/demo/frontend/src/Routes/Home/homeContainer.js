import React from "react";
import HomePresenter from "./homePresenter";
import MhomePresenter from "../MHome/MhomePresenter";
import { isMobileOnly } from "react-device-detect";

export default class extends React.Component {
  render() {
    return isMobileOnly ? (
      <MhomePresenter></MhomePresenter>
    ) : (
      <HomePresenter></HomePresenter>
    );
  }
}
