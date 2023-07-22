import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getImages from 'api/app';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    hasMore: true,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const imageData = await getImages(this.state.query, this.state.page);

        if (imageData.hits.length === 0) {
          this.setState({ hasMore: false });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...imageData.hits],
          }));
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({ images: [], query, page: 1 });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, hasMore } = this.state;
    const showLoadMoreButton = images.length > 0 && hasMore;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
        {showLoadMoreButton && <Button loadMoreImages={this.loadMoreImages} />}
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}

export default App;
