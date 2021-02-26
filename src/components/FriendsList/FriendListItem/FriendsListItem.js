import React from "react";
import friendStyle from "../FriendList.module.css";
const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li>
      {name}
      <span
        className={isOnline ? friendStyle.green : friendStyle.status}
      ></span>
      <img src={avatar} alt={name} width="100" height="100" />
    </li>
  );
};

export default FriendListItem;
