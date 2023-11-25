import React, { useEffect, useState } from 'react';
import './../styles/Banner.css';

function Banner() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    '/images/banner/39fa8e5a-2f1d-4517-94c5-7443e4228295.jpg',
    '/images/banner/68d00981-c8ec-4956-af3a-9d3cd0bb9845.jpg',
    '/images/banner/919d8abf-306c-4486-8c71-75b4f6b697ad.jpg',
    '/images/banner/5027e827-c4cb-409f-b225-6c549534e0bd.jpg',
    '/images/banner/65350ddc-11b4-4e37-9896-7a04160438ae.jpg',
    '/images/banner/a2ad4ff9-23fa-4a46-87d3-f2dd7a833edf.jpg',
    '/images/banner/b5d6ca69-15f2-485e-864e-b20aeb3c979c.jpg',
    '/images/banner/de0ff2f9-5363-40f8-9b0c-5882b9ee7044.jpg',
    '/images/banner/c1e4bffd-7175-4ee9-8991-d89b3ba1b095 2.jpg',
  ];

  const calculateImageBrightness = async (imageUrl) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageUrl;

      img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        let sum = 0;

        // Get the pixel data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        // Calculate the brightness
        for (let i = 0; i < imageData.length; i += 4) {
          const brightness = (imageData[i] + imageData[i + 1] + imageData[i + 2]) / 3;
          sum += brightness;
        }

        // Calculate average brightness
        const averageBrightness = sum / (imageData.length / 4);

        resolve(averageBrightness);
      };
    });
  };

  const getTextColor = (brightness) => {
    // Choose the text color based on the brightness value
    return brightness > 128 ? 'black' : 'white';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const imageUrl = `${process.env.PUBLIC_URL}${images[imageIndex]}`;

  useEffect(() => {
    calculateImageBrightness(imageUrl).then((brightness) => {
      const textColor = getTextColor(brightness);
      document.documentElement.style.setProperty('--text-color', textColor);
    });
  }, [imageUrl]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: 'center top',
        position: 'relative',
        transition: 'background-image 1s ease', // Add transition property
      }}
    >
      <div className="banner_contents">
        {/* Your anniversary message content goes here */}
        <div className="banner_description">
          <h1 className="banner_title">Happy Marriage Anniversary</h1>
          <p>Wishing you both a day filled with love, laughter, and cherished moments as you celebrate another year of togetherness.</p>
        </div>
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
}

export default Banner;

  /* Media query for smaller screens */
  // @media (max-width: 768px) {
  //   .banner {
  //     height: 400px; /* Adjusted height for smaller screens */
  //   }
  
  //   .banner_contents {
  //     padding-top: 150px; /* Adjusted padding-top for smaller screens */
  //   }
  
  //   .banner_title {
  //     font-size: 2rem; /* Adjusted font size for smaller screens */
  //   }
  // }