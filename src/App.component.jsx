import React from "react";
import { MainContainer } from "./App.styles";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.component";

function App() {
  return (
    <MainContainer>
      <h1>Demo for custom video player in react</h1>
      <small style={{ marginBottom: "20px" }}>
        (Pause video to see bookmark option)
      </small>
      <VideoPlayer />
    </MainContainer>
  );
}

export default App;
