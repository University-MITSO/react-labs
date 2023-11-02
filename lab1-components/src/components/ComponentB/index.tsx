import React, { FC } from "react";

import styles from "./styles.module.scss";

interface ComponentBProps {
  title: string;
  children: React.ReactNode;
}

const ComponentB: FC<ComponentBProps> = (props) => {
  return (
    <div className={styles.ComponentB}>
      <h3 className={styles.ComponentB__Title}>{props.title}</h3>
      <div className={styles.ComponentB__Content}>{props.children}</div>
    </div>
  );
};

export default ComponentB;