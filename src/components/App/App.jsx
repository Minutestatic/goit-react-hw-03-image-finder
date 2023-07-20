import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}

export default App;
