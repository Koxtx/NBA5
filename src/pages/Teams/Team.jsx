import DisplayConf from "./DisplayConf";
import styles from "./Team.module.scss";

export default function Team({
  person,
  teams,
  licensed,
  login,
  view,
  filter,
  handleTogglePages,
  toggleLiked,
}) {
  return (
    <div
      className="d-flex flex-column jc-start mt-30"
      style={{ width: "100%" }}
    >
      <div className={`d-flex ${styles.main} jc-between align-items-center`}>
        <h2 className={`${styles.presentation}`}>
          {licensed && <span>Welcome {person.name} !</span>}
        </h2>
        <div className={`${styles.burgerMenu}`}>
          <button
            onClick={login}
            className="btn btn-reverse-primary fz-20 mr-15"
          >
            {licensed ? "Logout" : "Login"}
          </button>
          <button
            onClick={() => handleTogglePages("users")}
            className="btn btn-primary fz-20 mr-15"
          >
            Users
          </button>
          <button
            onClick={() => handleTogglePages("favorites")}
            className="btn btn-reverse-primary fz-20"
          >
            Favorites
          </button>
        </div>
      </div>
      {licensed ? (
        view === "all" ? (
          <>
            <DisplayConf
              teams={teams}
              filter={filter}
              toggleLiked={toggleLiked}
            />
          </>
        ) : view === "East" ? (
          <DisplayConf
            teams={teams}
            view={view}
            filter={filter}
            toggleLiked={toggleLiked}
          />
        ) : view === "West" ? (
          <DisplayConf
            teams={teams}
            view={view}
            filter={filter}
            toggleLiked={toggleLiked}
          />
        ) : null
      ) : (
        <p className="text-error d-flex justify-content-center mt-30 fz-20">
          Vous devez être connecté
        </p>
      )}
    </div>
  );
}
