// ImageRow.js
import React from 'react';
import Row from './Row';

const ImageRow = ({ title, isLargeRow }) => {
  // Add the new list of image filenames
  const images = [
    '5b73292b-dba0-49fd-b83e-9665c218d2ba.JPG',
    '5ca104bc-3748-4cca-b212-e7ed54261d1a.JPG',
    '05e0ee07-6d26-4778-bc3f-d05578f8cc86.JPG',
    '9d713cdf-7e2c-44e9-a42c-90d3e87c806b.JPG',
    '47a18c2d-3ae1-486c-83c9-a97e2229e382.JPG',
    '68d00981-c8ec-4956-af3a-9d3cd0bb9845.JPG',
    '70b42cfa-c382-4f31-be2e-ee462740de6d.JPG',
    '71a4cbb3-5175-457b-ba82-0f108c75e4be.JPG',
    '76dbd5e8-944e-4538-ad56-807f48e56129.JPG',
    '376df5ca-18b3-4209-8ed0-18e7d658e252.JPG',
    '729ca0eb-0e38-48b2-bedd-5b7bab01044b.JPG',
    '851d7073-ccb9-40b7-83f3-63bb65651e9e.JPG',
    '919d8abf-306c-4486-8c71-75b4f6b697ad.JPG',
    '5027e827-c4cb-409f-b225-6c549534e0bd.JPG',
    '5709d35f-0cca-442e-9ee8-7886c89a9ce4.JPG',
    '49607ac7-fde9-44c6-b7f2-9148d8ead603.JPG',
    '65350ddc-11b4-4e37-9896-7a04160438ae.JPG',
    '2770428b-03ba-47f5-b6c7-7769b3878c32.JPG',
    '52249217-b632-4030-b095-912344339b9d.JPG',
    '88953343-3bb2-4ec8-9bce-6aae87958186.JPG',
    'a9ecfb77-9a18-47ef-b30f-a92eeb1acd0a.JPG',
    'a44c1cf3-f06f-4a2c-aa15-cacb64d17d49.JPG',
    'a325a8d7-3510-4360-8831-2cbee9a5c9bf.JPG',
    'a5284dcd-2f20-4ae3-8009-72b5854422a4.JPG',
    'ad5adb48-f87c-4405-ac44-a56ac644d999.JPG',
    'c1a9403a-0703-4c67-afd6-3b26fc360373.JPG',
    'c1e4bffd-7175-4ee9-8991-d89b3ba1b095 2.jpg',
    'c1e4bffd-7175-4ee9-8991-d89b3ba1b095.JPG',
    'c79da3b5-83e9-42fa-877b-407f2cebfdb9.JPG',
    'cd563427-558b-40d0-b9d3-678c5522d5e2.JPG',
    'ced27b0a-5f22-43cd-98aa-e3e3c61b0f9c.JPG',
    'daf430ff-de88-40ed-ade8-8d32f68e60b3.JPG',
    'e63b9bea-9b5e-433d-b268-9190c19b71e4.JPG',
    'e391a1de-c4f0-454e-8950-b916a402e52e.JPG',
    'e5008ef1-3064-4ce6-9599-83ce16f4fc66.JPG',
    'f0a105b1-c2d1-45dc-be15-c2cfc4448b3a.JPG',
    'f2a6c847-25ce-4ef5-830a-bed3164002d5.JPG',
    'f367a11d-eef3-4679-84a1-1ddd53436949.JPG',
    'fffc1bb9-fc51-4cdb-a0a4-061f8755734d.JPG',
  ];
  

  

  const anniversaryText = "Happy Anniversary! Celebrating the love and joy of another year together.";

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'white', margin: '20px 0' }}>{anniversaryText}</h2>
      <Row title={title} media={images} isLargeRow={isLargeRow} isVideoRow={false} />
    </div>
  );
};

export default ImageRow;
