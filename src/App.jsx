import "./App.css";
import Heading from "./Components/Heading";
import MoviesCard from "./Components/MoviesCard";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <Heading title="NETFLIX" styleclass="netflix-brand" />
      <NavBar />
      <MoviesCard />
    </div>
  );
}

export default App;