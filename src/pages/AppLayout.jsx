import { useEffect, useState } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import styles from "./AppLayout.module.css";
import AdBlockDetect from 'ad-block-detect';
import AdBlockDetector from "../components/AdBlockDetector";

const AppLayout = () => {



  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
