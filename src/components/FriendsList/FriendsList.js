import React from "react";
import FriendListItem from "./FriendListItem/FriendsListItem";
import { v4 as id } from "uuid";
import friendStyle from "./FriendList.module.css";

const list = ({ friends }) => {
  return (
    <div className={friendStyle.container}>
      <ul className={friendStyle.friends}>
        {friends.map(({ name, avatar, isOnline }) => (
          <FriendListItem
            name={name}
            avatar={avatar}
            isOnline={isOnline}
            key={id()}
          />
        ))}
      </ul>
    </div>
  );
};

export default list;
