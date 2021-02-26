import React from "react";
import FriendListItem from "./FriendListItem/FriendsListItem";
import { v4 as id } from "uuid";
import friendStyle from "./FriendList.module.css";

const list = ({ friends }) => {
  return (
    <ul className={friendStyle.friends}>
      <div className={friendStyle.container}>
        {friends.map(({ name, avatar, isOnline }) => (
          <FriendListItem
            name={name}
            avatar={avatar}
            isOnline={isOnline}
            key={id()}
          />
        ))}
      </div>
    </ul>
  );
};

export default list;
