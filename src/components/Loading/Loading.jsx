import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-fill">
      <i className={`fas fa-spinner ${styles.spinner}`}></i>
    </div>
  );
}
