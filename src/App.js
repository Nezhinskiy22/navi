import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Field from "./Field";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://demo1030918.mockable.io/")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  console.log(Object.keys(data));

  return (
    <div className="App">
      <Input data={data} width={130} height={25} />
      {/* clicked squares */}
    </div>
  );
}

export default App;
