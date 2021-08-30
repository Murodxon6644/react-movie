import React from "react";

export default class Search extends React.Component {
  state = {
    search: "taxi",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handeleFilter = (e) => {
    this.setState( () => ({type: e.target.dataset.type }), () => {
        this.props.searchMovies(this.state.search, this.state.type)
    });
  };
  render() {
    return (
      <div className="row">
        <div className="input-field ">
          <input
            type="search"
            className="validate"
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type )}
          >
            Search Movies
          </button>
        </div>
        <div>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handeleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handeleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies Only</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handeleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}
