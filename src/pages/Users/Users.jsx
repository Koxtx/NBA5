import styles from "./Users.module.scss";

export default function Users({
  showUsers,
  handleInputUser,
  handleClick,
  user,
  allUsers,
  handleClickDelete,
}) {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${styles.main}`}
    >
      <h3 onClick={() => showUsers("teams")} className={`mb-20 ${styles.link}`}>
        Back to Homepage
      </h3>
      <form className="d-flex flex-column align-items-center p-20 mb-20">
        <div className={`mb-20 ${styles.searchBar}`}>
          <input
            onInput={handleInputUser}
            type="text"
            placeholder="name"
            name="name"
            value={user.name || ""}
          />
        </div>
        <div className={`mb-20 ${styles.searchBar}`}>
          <input
            onInput={handleInputUser}
            type="text"
            name="player"
            placeholder="player"
            value={user.player || ""}
          />
        </div>
        <button onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
      <ul className={`d-flex flex-column card list p-20 ${styles.list}`}>
        {allUsers.map((user, index) => (
          <li key={index} className="d-flex flex-row align-items-center mb-20">
            <span className={`flex-fill mr-20 ${styles.display}`}>
              {user.name} | {user.player}
            </span>
            <button
              onClick={() => {
                handleClickDelete(index);
              }}
              className="btn btn-reverse-primary"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
