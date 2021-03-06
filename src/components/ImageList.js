import React from 'react';

const ImageList = props => {
  console.log(props.images)
  const images = props.images.map(image => {
    return <img key={image.id} src={image.urls.regular} alt={image.tags[0]}/>
  });

  return <div>{images}</div>
};

export default ImageList;