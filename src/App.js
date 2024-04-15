import "./App.css";
import Navbar from "./Components/Navbar";
import Image from "./Components/Image";
import Card from "./Components/Card";
import Card1 from "./Components/Card1";

import Card3 from "./Components/Card3";
import Card2 from "./Components/Card2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Image />
      <div className="fem">
        <Card />
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default App;
