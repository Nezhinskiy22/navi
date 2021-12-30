import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Field from "./components/Field";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://demo1030918.mockable.io/")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="App">
      <Input data2={data} width={130} height={25} />
      {/* clicked squares */}
    </div>
  );
}

export default App;
