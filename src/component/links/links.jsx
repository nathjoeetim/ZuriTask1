import React from "react";
import classes from "./link.module.css";

const LinksItem = (props) => {
  const { id, link, linkText } = props;
  return (
    <li id={id} className={classes.linkItem}>
      <a href={link}> {linkText}</a>
    </li>
  );
};

export default LinksItem;
