import styles from "./OneTeam.module.scss";

export default function OneTeam({ t, toggleLiked }) {
  return (
    <div className={`card p-20 d-flex flex-column ${styles.teamCard}`}>
      <p className={`${styles.team}`}>
        <span>CITY : </span>
        {t.name}
      </p>
      <p className={`${styles.team}`}>
        <span>NAME : </span>
        {t.club}
      </p>
      <div className="d-flex justify-content-center align-items-center flex-fill">
        <img className={styles.logo} src={t.logo} alt="logo" />
      </div>
      <i
        onClick={() => toggleLiked(t._id)}
        className={` ${t.liked ? "fas fa-heart" : "far fa-heart"}`}
      ></i>
    </div>
  );
}
