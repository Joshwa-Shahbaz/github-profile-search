import styles from "./Header.module.css";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const nameParam = searchParams.get("name");
    if (nameParam) {
      setInput(nameParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        setSearchParams({ name: input });
      } else {
        setSearchParams({});
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input, setSearchParams]);

  const submitHandler = (event) => {
    event.preventDefault();
    // if (input) {
    //   setSearchParams({ name: input });
    // } else {
    //   setSearchParams({});
    // }
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
