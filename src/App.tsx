import "./App.css";
import { observableWeatherForecastStore } from "./store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./widgets/Box/Box";

function App() {
  //-- useEffect init query
  useEffect(() => {
    observableWeatherForecastStore.loadFullDayForecastData();
    observableWeatherForecastStore.loadCurrentForecastData();
  }, []);

  return (
    <div id="canvas-container">
      <Canvas>
        <Box/>
        <ambientLight intensity={0.3} />
        <directionalLight color="yellow" position={[0, 0, 5]} />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

export default observer(App);
