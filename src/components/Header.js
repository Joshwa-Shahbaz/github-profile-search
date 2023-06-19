import React, { useContext } from "react";
import CardContext from "../store/context";
import styles from "./Header.module.css";

const Header = () => {
  const { user, userHandler } = useContext(CardContext);

  const nameHandler = (e) => {
    userHandler(e.target.value);
  };

  return (
    <>
      <div className={styles.main}>
        <div>
          <i className={`fa-brands fa-github  git-logo ${styles.gitlogo}`}></i>
          <h1 className={styles.logo}>GitHub User Search</h1>
          <p className={styles.headerpara}>
            Browse users and their profiles via
            <a href="https://docs.github.com/en/rest?apiVersion=2022-11-28">
              the GitHub API
            </a>
          </p>
        </div>
        <div>
          <form>
            <input
              className={styles.search}
              type="text"
              placeholder="Search for a user, e.g., joshwa-shahbaz"
              value={user}
              onChange={nameHandler}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
