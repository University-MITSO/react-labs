import React, { FC } from "react";

import styles from "./styles.module.scss";

interface ComponentAProps {
  title: string;
  children: React.ReactNode;
}

const ComponentA: FC<ComponentAProps> = (props) => {
  return (
    <div className={styles.ComponentA}>
      <h3 className={styles.ComponentA__Title}>{props.title}</h3>
      <div className={styles.ComponentA__Content}>{props.children}</div>
    </div>
  );
};

export default ComponentA;
