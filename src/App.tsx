import "./App.css";
import ExpandableText from "./components/ExpandableText";
import NavBar from "./components/NavBar";

function App() {
  const handleClick = () => {};

  return (
    <>
      <NavBar />
      <main>
        <ExpandableText>Hello World</ExpandableText>
      </main>
    </>
  );
}

export default App;
