import React from "react";
import styles from "./Error.module.css";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return (
    <div className={styles.error_body}>
      <div className={`alert alert-danger `} role="alert">
        {message}
      </div>
    </div>
  );
};

export default Error;
