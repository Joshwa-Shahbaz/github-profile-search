import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Respon.module.css";

const Respon = () => {
  const [repo, setRepo] = useState([]);
  const params = useParams();
  const user = params.userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user}/repos`
        );
        setRepo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchData();
    }
  }, []);
  return (
    <>
      <h1>Repositories</h1>
      {repo.map((item) => {
        return (
          <>
            <h1>{item.name}</h1>
            <p className={styles.break}>{item.description}</p>
            <p>{item.pushed_at}</p>
            <div className={styles.icon}>
              <p>
                <i className="fa-solid fa-star"></i>
                {item.watchers_count}
              </p>
              <p>
                <i className="fa-solid fa-code-branch"></i>
                {item.forks_count}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Respon;
