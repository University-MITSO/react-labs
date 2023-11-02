import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

function App() {
  const handleClick = (title: string) => {
    alert(`Click [App]: ${title}`);
  };

  return (
    <div className="App">
      <ComponentA title="Component A">
        <ComponentB title="Component B">
          <ComponentC
            title="Component C"
            onClick={handleClick}
          ></ComponentC>
        </ComponentB>
        <ComponentB title="Component B">
          <ComponentC
            title="Component C"
            onClick={handleClick}
          ></ComponentC>
        </ComponentB>
      </ComponentA>
    </div>
  );
}

export default App;
