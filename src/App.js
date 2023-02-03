import hero from "./images/hero.png";
import "./App.css";

import Heading from "./components/Heading";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <section>
        <Heading text="Software Developer" />
        <img src={hero} alt="shivam yadav picture" />
        <Social />
      </section>

      <section>
        <p>
          I am <span className="bold">Shivam</span>, an aspiring software
          developer driven by a passion for technology and problem-solving. My
          goal is to use my skills and knowledge to create
          <span className="bold">
            {" "}
            innovative solutions for a better world.
          </span>
        </p>
        <Heading text="Shivam Yadav" />
      </section>
    </div>
  );
}

export default App;
