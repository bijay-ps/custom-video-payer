import React, { useRef, useState } from "react";
import video from "../../assets/videos/video.mp4";

import {
  MarkerButton,
  MarkerContainer,
  RowContainer,
  VideoPlayerContainer,
} from "./VideoPlayer.styles";
import poster from "../../assets/images/poster.png";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [show, setShow] = useState(false);
  const [bookmarks, setBookMarks] = useState([]);
  const [text, setText] = useState("");

  const playPause = (e) => {
    e.preventDefault();
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const addBookMarks = (e) => {
    playPause(e);
    const marker = {
      time: videoRef.current.currentTime,
      text,
    };
    if (text.length > 0) {
      setBookMarks([...bookmarks, marker]);
      setText("");
    }
  };

  const gotoMarker = (time) => {
    videoRef.current.currentTime = time;
    videoRef.current.play();
  };

  return (
    <RowContainer>
      <VideoPlayerContainer>
        <video
          src={video}
          width="600"
          ref={videoRef}
          poster={poster}
          onClick={playPause}
          controls
          controlsList="nodownload nofullscreen "
          disablePictureInPicture
          onPause={() => setShow((s) => true)}
          onPlay={() => setShow((s) => false)}
        />

        {show ? (
          <MarkerContainer>
            <span>Add a marker</span>
            <div>
              <input
                type="text"
                value={text}
                placeholder="Enter bookmark text"
                onChange={(e) => setText(e.target.value)}
              />
              <MarkerButton type="button" onClick={addBookMarks}>
                submit
              </MarkerButton>
            </div>
          </MarkerContainer>
        ) : null}
      </VideoPlayerContainer>
      {bookmarks.length > 0 ? (
        <ul>
          {bookmarks.map((mark) => (
            <li key={mark.time} onClick={() => gotoMarker(mark.time)}>
              {mark.text} @ {mark.time}
            </li>
          ))}
        </ul>
      ) : null}
    </RowContainer>
  );
};

export default VideoPlayer;
