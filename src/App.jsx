import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Team from "./pages/Teams/Team";
import Users from "./pages/Users/Users";
import Favorites from "./pages/Favorites/Favorites";
import url from "./url";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function getTeams() {
      try {
        const response = await fetch(`${url}api/teams`);
        if (response.ok) {
          const teams = await response.json();
          setTeams(teams);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getTeams();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  // setTimeout(() => {
  //   setIsLoading(false);
  //   setTeams(datas);
  // }, 1500);
  const [licensed, setLicensed] = useState(true);
  const [view, setView] = useState("all");
  const [filter, setFilter] = useState("");
  const [showPage, setShowPage] = useState("teams");
  const [user, setUser] = useState({
    name: "",
    age: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetch(`${url}api/players`);
        if (response.ok) {
          const players = await response.json();
          setAllUsers(players);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getPlayers();
  }, []);
  async function createPlayer() {
    try {
      const response = await fetch(`${url}api/players/add`, {
        method: "POST",
        body: JSON.stringify({
          name: user.name,
          players: user.player,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("ok");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(user);
    setAllUsers([...allUsers, { ...user }]);
    createPlayer(user);
    resetForm();
  }

  function toggleLiked(i) {
    setTeams(
      teams.map((t, index) => (index + 1 === i ? { ...t, liked: !t.liked } : t))
    );
  }

  function resetForm() {
    setUser({
      name: "",
      player: "",
    });
  }

  function handleInputUser(e) {
    console.log(e.target.value);
    let value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function login() {
    setLicensed(!licensed);
  }
  function changeView(value) {
    setView(value);
  }
  function handleInput(e) {
    const value = e.target.value;
    console.log(value);
    setFilter(value.trim().toLowerCase());
  }
  function handleTogglePages(value) {
    setShowPage(value);
  }
  function handleClickDelete(i) {
    console.log(i);
    const newUserList = allUsers.filter((t, index) => index !== i);
    setAllUsers(newUserList);
  }

  const person = {
    name: "John",
    age: 20,
  };
  return (
    <div className={`d-flex align-items-center flex-column  ${styles.main}`}>
      {showPage === "users" ? (
        <Users
          showUsers={handleTogglePages}
          handleClick={handleClick}
          handleInputUser={handleInputUser}
          user={user}
          allUsers={allUsers}
          handleClickDelete={handleClickDelete}
        />
      ) : showPage === "teams" ? (
        <>
          <Header
            changeView={changeView}
            handleInput={handleInput}
            licensed={licensed}
            login={login}
            handleTogglePages={handleTogglePages}
          />
          {isLoading ? (
            <Loading />
          ) : (
            <Team
              person={person}
              teams={teams}
              licensed={licensed}
              login={login}
              view={view}
              filter={filter}
              handleTogglePages={handleTogglePages}
              toggleLiked={toggleLiked}
            />
          )}
        </>
      ) : showPage === "favorites" ? (
        <Favorites
          showUsers={handleTogglePages}
          teams={teams}
          toggleLiked={toggleLiked}
        />
      ) : null}
    </div>
  );
}

export default App;
