import "./App.css";
import Heading from "./Components/Heading";
import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <Heading title="NETFLIX" className="netflix-brand" />
      <NavBar />
      <Movies />
    </div>
  );
}

export default App;
