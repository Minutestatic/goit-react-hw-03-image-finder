import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getImages from 'api/app';
import Searchbar from 'components/Searchbar';

class App extends Component {
  state = {
    images: [],
    q: '',
    loading: false,
  };

  async componentDidMount() {
    try {
      const imageData = await getImages();
      this.setState({ images: imageData.hits });
    } catch (error) {
      console.error(error);
    }
  }

  handleFormSubmit = q => {
    console.log(q);
    this.setState({ q });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

export default App;
