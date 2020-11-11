import React, {useEffect} from "react"
import io from 'socket.io-client';

import Layout from "../components/layout"

const IndexPage = () => {
  const socketURL = 'http://localhost:3000/';
  // const socket = io(socketURL, {transports: ['websocket']});
  const socket = io(socketURL);
  console.log(socket);

  useEffect(() => {
    return () => {
      socket.off('message');
    };
  }, []);

  socket.on('message', (data) => {
    console.log(data);
  });

  const onButtonClick = () => {
    console.log("BUTTON CLICKED", socket);
    socket.emit('detection', 'TEST DETECTION');
  }

  return (
    <Layout>
      <button onClick={onButtonClick}>SEND TEST</button>
    </Layout>
  );
}

export default IndexPage;
