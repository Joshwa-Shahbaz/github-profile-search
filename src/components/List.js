import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./List.module.css";
import { useLocation } from "react-router-dom";

const List = () => {
  const [githubData, setGithubData] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user = searchParams.get("name");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?per_page=42&page=1&q=${user}`
        );

        setGithubData(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchData();
    }
  }, [user]);

  if (githubData.length === 0) {
    return (
      <div className={styles.message}>
        <h1>no result found !</h1>
      </div>
    );
  }

  return (
    <>
      <div className={styles.grid}>
        {githubData.map((item, key) => (
          <>
            <Link className={styles.check} to={item.login}>
              <div className={styles.users} key={key}>
                <img
                  className={styles.img}
                  src={item.avatar_url}
                  alt={item.login}
                />
                <h1 className={styles.username}>{item.login}</h1>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default List;
