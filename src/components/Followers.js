import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Followers.module.css";

const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const params = useParams();
  const user = params.userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user}/followers`
        );
        setFollowers(response.data);
        console.log(response);
      } catch (error) {
        console.log("error", error.response.data.message);
      }
    };

    fetchData();
  }, [user]);

  return (
    <>
      <h1>Followers</h1>
      {followers.map((item) => (
        <div className={styles.flex} key={item.id}>
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
