import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardContext from "../store/context";
import styles from "./List.module.css";

const List = () => {
  const { user } = useContext(CardContext);
  const [githubData, setGithubData] = useState([]);

  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?per_page=42&page=1&q=${user}`
        );
        setGithubData(response.data.items);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <>
      <div className={styles.grid}>
        {githubData.map((item, key) => (
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
        ))}
      </div>
    </>
  );
};

export default List;
