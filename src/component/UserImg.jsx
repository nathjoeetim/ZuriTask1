import React from "react";
import share from "../share.png";
import classes from "./userimg.module.css";

const UserImg = () => {
  return (
    <div className={classes.imageContainer}>
      {/* <div></div> */}
      <div className={classes.profile__img}>
        <img alt="" className={classes.img} />
        <p>Annette Black</p>
      </div>
      <div>
        <img src={share} alt="" />
      </div>
    </div>
  );
};

export default UserImg;
