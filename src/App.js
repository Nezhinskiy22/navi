import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://demo1030918.mockable.io/")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  console.log(data);

  return (
    <div className="App">
      <Input data={data} width={130} height={25} />
      {/* field */}
      {/* clicked squares */}
    </div>
  );
}

export default App;
