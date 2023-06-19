import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Followers.module.css";

const Followers = () => {
  const [followers, setfollowers] = useState([]);
  const params = useParams();
  const user = params.userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user}/followers`
        );
        setfollowers(response.data);
        console.log(followers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });
  return (
    <>
      <h1>Followers</h1>
      {followers.map((item) => (
        <div className={styles.flex}>
          <div>
            <img className={styles.img} src={item.avatar_url} alt="" />
          </div>
          <div>
            <h1>{item.login}</h1>
          </div>
        </div>
      ))}
    </>
  );
};
export default Followers;
