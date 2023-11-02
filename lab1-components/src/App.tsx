import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

function App() {
  return <div className="App">
    <ComponentA title="Component A">
      <ComponentB title="Component B">
        <ComponentC title="Component C"></ComponentC>
      </ComponentB>
      <ComponentB title="Component B">
        <ComponentC title="Component C"></ComponentC>
      </ComponentB>
    </ComponentA>
  </div>;
}

export default App;
