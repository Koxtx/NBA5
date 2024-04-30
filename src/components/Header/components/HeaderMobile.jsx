import styles from "./headerMobile.module.scss";

export default function HeaderMobile({
  changeView,
  setShowMenu,
  licensed,
  login,
  handleTogglePages,
}) {
  return (
    <ul className={`p-20 ${styles.container}`}>
      <li
        onClick={() => {
          changeView("all");
          setShowMenu(false);
        }}
      >
        All
      </li>
      <li
        onClick={() => {
          changeView("West");
          setShowMenu(false);
        }}
      >
        West
      </li>
      <li
        onClick={() => {
          changeView("East");
          setShowMenu(false);
        }}
      >
        East
      </li>
      <li
        onClick={() => {
          login();
          setShowMenu(false);
        }}
      >
        {licensed ? "Logout" : "Login"}
      </li>
      <li onClick={() => handleTogglePages("users")}>Users</li>
      <li onClick={() => handleTogglePages("favorites")}>Favorites</li>
    </ul>
  );
}
