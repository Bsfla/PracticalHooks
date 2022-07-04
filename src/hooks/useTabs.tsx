import React from "react";
import { useState } from "react";

function useTabs<T>(initialTabs: number, allTabs: T[]) {
  const [currnetIndex, setCurrentIndex] = useState(initialTabs);

  return {
    currentItem: allTabs[currnetIndex],
    changeIndex: setCurrentIndex,
  };
}

export default useTabs;
