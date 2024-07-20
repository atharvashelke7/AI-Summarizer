import "./App.css";
import Demo from "./components/Demo";
import Hero from "./components/Hero";

function App() {
  return (
    <section>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
         <Hero/>
         <Demo/>
      </div>
    </section>
  );
}

export default App;
