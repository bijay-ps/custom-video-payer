import styled from "styled-components";

export const VideoPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 600px;
  video {
    cursor: pointer;
  }
`;

export const MarkerContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  input {
    height: 30px;
  }
  padding-bottom: 20px;
`;

export const MarkerButton = styled.button`
  background: deepskyblue;
  padding: 10px;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    background-color: deepskyblue;
    list-style: none;
    padding: 20px;
    margin: 0;
    li {
      border-bottom: 1px solid #000;
      cursor: pointer;
    }
  }
`;
