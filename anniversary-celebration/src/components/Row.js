// Row.js
import React, { useState } from 'react';
import './../styles/Row.css';

function Row({ title, media, isLargeRow, isVideoRow }) {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (mediaItem) => {
    if (isVideoRow) {
      setSelectedMedia(mediaItem);
    }
  };

  return (
    <div className={`row ${isVideoRow ? 'videoRow' : ''}`}>
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {media.map((mediaItem) => (
          isVideoRow ? (
            <video
              key={mediaItem}
              onClick={() => handleMediaClick(mediaItem)}
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              controls
            >
              <source src={mediaItem} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              key={mediaItem}
              onClick={() => handleMediaClick(mediaItem)}
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              src={`${process.env.PUBLIC_URL}/images/row/${mediaItem}`}
              alt={mediaItem}
            />
          )
        ))}
      </div>
      {selectedMedia && (
        <div className="selected_media">
          {isVideoRow ? (
            <video
              src={selectedMedia}
              controls
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/row/${selectedMedia}`}
              alt={selectedMedia}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Row;
