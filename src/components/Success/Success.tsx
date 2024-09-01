import React from "react";
import styles from "./Success.module.css";

interface Props {
  message: string;
}

const Success = ({ message }: Props) => {
  return (
    <div className={styles.success_body}>
      <div className={`alert alert-success `} role="alert">
        {message}
      </div>
    </div>
  );
};

export default Success;
