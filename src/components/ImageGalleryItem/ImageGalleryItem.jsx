import React, { Component } from 'react';
import getImages from 'api/app';

class ImageGalleryItem extends Component {
  state = {
    images: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      try {
        const imageData = await getImages(this.props.query);
        this.setState({ images: imageData.hits });
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    return this.state.images.map(image => (
      <li key={image.id}>
        <img src={image.previewURL} alt="" />
      </li>
    ));
  }
}

export default ImageGalleryItem;
