import React from "react";
import useTabs from "../hooks/useTabs";

const contacts = [
  {
    title: "section1",
    content: "Im The Section1",
  },
  {
    title: "section2",
    content: "Im the Section2",
  },
];

const Tabs = () => {
  const { currentItem, changeIndex } = useTabs(0, contacts);
  return (
    <>
      {contacts.map((contact, index) => (
        <button onClick={() => changeIndex(index)}>{contact.title}</button>
      ))}
      <span>{currentItem.content}</span>
    </>
  );
};

export default Tabs;
