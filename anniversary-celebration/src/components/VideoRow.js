// VideoRow.js
import React from 'react';
import Row from './Row';

import video1 from '../videos/row/IMG_8662.MOV';
import video2 from '../videos/row/IMG_8646.MOV'; // Add this line for the new video
// Import additional videos as needed

const VideoRow = ({ title, isLargeRow }) => {
  const videos = [video1, video2]; // Add the new video to the 'videos' array
  // Add additional video imports to the 'videos' array

  return <Row title={title} media={videos} isLargeRow={isLargeRow} isVideoRow={true} />;
};

export default VideoRow;
