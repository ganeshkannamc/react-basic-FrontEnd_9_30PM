import { createContext, useState } from "react";

export let MyData = createContext("");

const DataProvider = ({ children }) => {
  let [name, setName] = useState("");

  return (
    <MyData.Provider value={{ name, setName }}>{children}</MyData.Provider>
  );
};

export default DataProvider;
