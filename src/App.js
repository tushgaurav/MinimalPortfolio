import hero from "./images/hero.png";
import "./App.css";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particlesConfig";

import Heading from "./components/Heading";
import Social from "./components/Social";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
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
