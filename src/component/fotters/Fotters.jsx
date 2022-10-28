import React from "react";
import classes from "./fotter.module.css";
import globeImg from "./images.png";

const Fotter = () => {
  return (
    <div className={classes.fotter}>
      <div>
        <h2>
          Zuri<span>.</span>internship
        </h2>
      </div>
      <div>
        <h2>HGN internship 9 Frontend Task </h2>
      </div>
      <div className={classes.item}>
        <img src={globeImg} alt="" className={classes.icon} />
        <h2>
          INGRESSIVE <br />
          FOR GOOD
        </h2>
      </div>
    </div>
  );
};

export default Fotter;
