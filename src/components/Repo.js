import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styles from "./Repo.module.css";
import { Link } from "react-router-dom";
import Respon from "./Respon";
import Followers from "./Followers";

const Repo = () => {
  const [profile, setProfile] = useState([]);
  const params = useParams();
  const user = params.userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user}`
        );
        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchData();
    }
  });

  return (
    <>
      <div className={styles.main}>
        <div>
          <img className={styles.img} src={profile.avatar_url} alt="" />
        </div>
        <div className={styles.data}>
          <h1>{profile.login}</h1>
          <p className={styles.bio}>{profile.bio}</p>
          <p className={styles.company}>{profile.company}</p>
          <p>{profile.location}</p>
          <Link to={""}>{profile.blog}</Link>

          <div className={styles.flex}>
            <div>
              <span className={styles.avg}>{profile.followers}</span>
              <p className={styles.tag}>followers</p>
            </div>
            <div>
              <span className={styles.avg}>{profile.following}</span>
              <p className={styles.tag}>following</p>
            </div>
            <div>
              <span className={styles.avg}>{profile.public_repos}</span>
              <p className={styles.tag}>repos</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.check}>
        <div className={styles.gap}>
          <Respon />
        </div>
        <div>
          <Followers />
        </div>
      </div>
    </>
  );
};
export default Repo;
