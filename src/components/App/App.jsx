import React, { Component } from 'react';

import Serchbar from 'components/Searchbar/Searchbar';

class App extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    const API_KEY = '36013837-3d9990b0614e4049bfc16c19d'; // Підставте сюди свій ключ доступу
    const query = 'cat';
    const perPage = 12;

    fetch(
      `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
      .then(response => response.json())
      .then(data => this.setState({ images: data.hits }))
      .catch(error => console.error('Error fetching data:', error));
  }
  // async componentDidMount() {
  //   const data = fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=36013837-3d9990b0614e4049bfc16c19d&image_type=photo&orientation=horizontal&per_page=12'
  //   );
  //   console.log(data);
  // }
  render() {
    console.log(this.state.images);
    return (
      <div>
        <Serchbar />
      </div>
    );
  }
}

export default App;
