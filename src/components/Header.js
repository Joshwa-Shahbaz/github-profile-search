import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState("");
  const [updated, setUpdated] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (updated) {
      navigate(`/?name=${updated}`);
    } else {
      return null;
    }
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
