import { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    query: '',
  };

  onChangeInput = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.warn('🦄 Введите слово для поиска!', {
        position: 'top-center',
        theme: 'colored',
      });
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    event.currentTarget.reset();
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
