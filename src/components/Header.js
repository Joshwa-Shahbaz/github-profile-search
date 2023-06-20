import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState("");
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    setSearchParams({ name: updated });
  }, [updated]);

  const submitHandler = (event) => {
    event.preventDefault();

    setInput("");
  };

  const stateHandler = () => {
    setUpdated(input);
  };

  return (
    <>
      <div className={styles.main}>
        <div>
          <i className={`fa-brands fa-github  git-logo ${styles.gitlogo}`}></i>
          <Link to="/" className={styles.link}>
            <h1 className={styles.logo}>GitHub User Search</h1>
          </Link>
          <p className={styles.headerpara}>
            Browse users and their profiles via
            <a href="https://docs.github.com/en/rest?apiVersion=2022-11-28">
              the GitHub API
            </a>
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <input
              className={styles.search}
              type="text"
              placeholder="Search for a user, e.g., joshwa-shahbaz"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className={styles.serachIon} onClick={stateHandler}>
              <i className="fa-solid fa-magnifying-glass "></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
