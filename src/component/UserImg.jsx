import React from "react";
import classes from "./userimg.module.css";

const UserImg = () => {
  return (
    <div className={classes.imageContainer}>
      <div></div>
      <div className={classes.profile__img}>
        <img alt="" className={classes.img} />
        <p>Annette Black</p>
      </div>
      <div className={classes.shareContainer}>
        <img alt="" className={classes.share} />
      </div>
    </div>
  );
};

export default UserImg;
