import styles from "./DisplayConf.module.scss";
import OneTeam from "./OneTeam";

export default function DisplayConf({ view, teams, filter, toggleLiked }) {
  return (
    <>
      {view && (
        <h2 className={`mt-30 ml-20 ${styles.east}`}>{view} conference</h2>
      )}
      <div className="d-flex flex-wrap justify-content-center">
        {view
          ? teams
              .filter((t) => t.conference === view)
              .filter((t) => t.club.toLowerCase().startsWith(filter))
              .map((t) => (
                <OneTeam key={t._id} t={t} toggleLiked={toggleLiked} />
              ))
          : teams
              .filter((t) => t.club.toLowerCase().startsWith(filter))
              .map((t) => (
                <OneTeam key={t._id} t={t} toggleLiked={toggleLiked} />
              ))}
      </div>
    </>
  );
}
