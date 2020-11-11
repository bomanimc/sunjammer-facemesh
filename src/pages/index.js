import React, {useEffect} from "react"
import io from 'socket.io-client';

import Layout from "../components/layout"

const IndexPage = () => {
  const socketURL = '/socket';
  const socket = io(socketURL);

  useEffect(() => {
    return () => {
      socket.off('message');
    };
  }, []);

  socket.on('message', (data) => {
    console.log(data);
  });

  const onButtonClick = () => {
    console.log("BUTTON CLICKED");
    socket.emit('detection', 'TEST DETECTION');
  }

  return (
    <Layout>
      <button onClick={onButtonClick}>SEND TEST</button>
    </Layout>
  );
}

export default IndexPage;
