import React from "react";
import { useEffect, useState } from "react";

function useTitle() {
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    setTimeout(() => {
      setTitle("Home");
    }, 5000);
    if (htmlTitle && title !== "Loading...") {
      htmlTitle.innerText = title;
    }
  }, [title]);
}

export default useTitle;
