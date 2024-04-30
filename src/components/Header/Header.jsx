import { useState } from "react";
import Button from "../Button";
import styles from "./Header.module.scss";
import HeaderMobile from "./components/HeaderMobile";

export default function Header({
  changeView,
  handleInput,
  licensed,
  login,
  handleTogglePages,
}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={`d-flex flex-row jc-between align-items-center ${styles.header}`}
    >
      <h1 className={` mt-30 ${styles.mainTitle}`}>NBA</h1>
      <div
        className={`d-flex justify-content-center align-items-center my-30 ${styles.searchBar}`}
      >
        <i className="fa-solid fa-magnifying-glass mr-15"></i>
        <input
          onInput={handleInput}
          className="flex-fill"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className={`${styles.burgerMenu}`}>
        <Button changeView={changeView} value={"East"} />
        <Button changeView={changeView} value={"West"} />
        <Button changeView={changeView} value={"all"} btnStyle={true} />
      </div>
      <i
        onClick={() => setShowMenu(true)}
        className={`fas fa-bars mr-10 ${styles.mobileHeader}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMobile
            changeView={changeView}
            setShowMenu={setShowMenu}
            licensed={licensed}
            login={login}
            handleTogglePages={handleTogglePages}
          />
        </>
      )}
    </div>
  );
}
