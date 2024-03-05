import styles from "../api-modal.module.css";

export const getResponseStyle = (code: number) => {
  if (code >= 200 && code < 300) {
    return styles.success;
  } else if (code >= 400 && code < 500) {
    return styles.clientError;
  } else if (code >= 500) {
    return styles.serverError;
  } else {
    return "";
  }
};
