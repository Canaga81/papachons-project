import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const resData = () => {
    fetch("https://papaapi.yetim.me/food")
      .then((res) => res.json())
      .then((el) => {
        setData(el);
        setFilteredData(el);
      });
  };

  useEffect(() => {
    resData();
  }, []);

  return (
    <>
      <Header setData={setData} data={data} setFilteredData={setFilteredData} />
      <Body data={filteredData} />
    </>
  );
}

export default App;