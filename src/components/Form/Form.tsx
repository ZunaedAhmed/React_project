import React, { useState } from "react";
import styles from "./Form.module.css";
import useUser from "../../hook/useUser";
import { isAgeLessThanTen } from "../../utils/common";
import { useNavigate } from "react-router-dom";
import PendingRequest from "../../models/PendingRequest";

interface Props {
  setError: (message: string) => void;
  setMessage: (message: string) => void;
  updatePendingRequest: (perndingRequest: PendingRequest) => void;
}

const Form = ({ setMessage, setError, updatePendingRequest }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [freeText, setFreeText] = useState<string>("");

  const { userProfiles, users } = useUser();
  const navigate = useNavigate();

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();

    const user = users.find((x) => x.username === username);
    const userProfile = userProfiles.find((x) => x.userUid === user?.uid);

    if (user && userProfile) {
      const res = isAgeLessThanTen(userProfile.birthdate);

      if (res) {
        setMessage("Request has been received!");

        updatePendingRequest({
          username: user.username,
          address: userProfile.address,
          free_text: freeText,
        });

        navigate("/success");
      } else {
        setError("Falied age is less than 10");
        navigate("/error");
      }
    } else {
      setError("No user found");
      navigate("/error");
    }
  };

  return (
    <div className={styles.input_form}>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Username
          </label>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            name="id"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="freeText" className="form-label">
            Free Text
          </label>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            name="freeText"
            value={freeText}
            onChange={(event) => setFreeText(event.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Check
        </button>
      </form>
    </div>
  );
};

export default Form;
