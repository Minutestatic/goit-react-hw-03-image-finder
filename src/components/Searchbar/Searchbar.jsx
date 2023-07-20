const Searchbar = ({ onSubmit }) => {
  // console.log(onSubmitForm);

  const onChangeInput = e => {
    console.log(e.target.value);
  };
  return (
    <header>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
};

export default Searchbar;
