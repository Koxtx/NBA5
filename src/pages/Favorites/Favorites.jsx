import styles from "./Favorites.module.scss";

export default function Favorites({ showUsers, teams, toggleLiked }) {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${styles.main}`}
    >
      <h3 onClick={() => showUsers("teams")} className={`mb-20 ${styles.link}`}>
        Back to Homepage
      </h3>
      <ul
        className={`d-flex flex-column align-items-center card list p-20 ${styles.list}`}
      >
        {teams
          .filter((t) => t.liked !== false)
          .map((t, index) => (
            <li
              key={t.id}
              className="d-flex flex-row align-items-center jc-between flex-row mb-20 w-90"
            >
              <span className={`flex-fill mr-20 ${styles.display}`}>
                {t.name}
              </span>
              <button
                onClick={() => {
                  toggleLiked(t.id);
                }}
                className="btn btn-reverse-primary"
              >
                Dislike
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
