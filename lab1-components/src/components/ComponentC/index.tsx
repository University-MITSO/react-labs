


import React, { FC } from "react";

import styles from "./styles.module.scss";

interface ComponentCProps {
  title: string;
}

const ComponentC: FC<ComponentCProps> = (props) => {
  return (
    <div className={styles.ComponentC}>
      <h3 className={styles.ComponentC__Title}>{props.title}</h3>
      <div className={styles.ComponentC__Content}>Content</div>
    </div>
  );
};

export default ComponentC;
