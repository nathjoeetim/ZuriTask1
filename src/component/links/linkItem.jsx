import React from "react";
import classes from "./link.module.css";
import LinksItem from "./links";
import Logos from "../logos/logos";
// import GitHubIcon from "./github.svg"

const linkArr = [
  {
    id: `twitter`,
    link: `https://mobile.twitter.com/nathjoeetim`,
    link_text: `Twitter Link`,
  },

  {
    id: `btn__zuri`,
    link: `https://training.zuri.team/`,
    link_text: `Zuri Team`,
  },

  {
    id: `books`,
    link: `http://books.zuri.team`,
    link_text: `Zuri Books`,
  },

  {
    id: `book__python`,
    link: `https://books.zuri.team/python-for-beginners?ref_id=<Nathaniel Etim>`,
    link_text: `Phyton Books`,
  },

  {
    id: `pitch`,
    link: `https://background.zuri.team`,
    link_text: `Background Check For code`,
  },

  {
    id: `book__design`,
    link: `https://books.zuri.team/design-rules`,
    link_text: `Design Books`,
  },
];

const Links = () => {
  const linkItems = linkArr.map((el) => {
    return (
      <LinksItem
        key={el.id}
        id={el.id}
        link={el.link}
        linkText={el.link_text}
      />
    );
  });

  return (
    <div className={classes.listItemContainer}>
      <nav>
        <ul>{linkItems}</ul>
      </nav>
      <Logos />
    </div>
  );
};

export default Links;
