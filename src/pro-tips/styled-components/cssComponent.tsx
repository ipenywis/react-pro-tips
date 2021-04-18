import React from "react";
import GalaxyImg from "../../assets/galaxy.jpg";
import styles from "./style.module.scss";

export function CSSComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={GalaxyImg} />
      </div>
    </div>
  );
}
