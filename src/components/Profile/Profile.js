import React from "react";
import s from "./Profile.module.css";

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <main>
      <div className={s.profile}>
        <div className={s.description}>
          <ul className={s.stats}>
            <li className={s.liitem}>
              <img
                src={avatar}
                alt="Аватар пользователя"
                className="avatar"
                width="100px"
              />
              <p className="name">{name}</p>
              <p className="tag">{tag}</p>
              <p className="location">{location}</p>
              <div className={s.container}>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{stats.followers}</span>

                <span className={s.label}>Views</span>
                <span className={s.quantity}>{stats.views}</span>

                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{stats.likes}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
export default Profile;
