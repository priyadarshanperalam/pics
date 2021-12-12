import React from "react";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

  onInputChange(event) {
		console.log("called");
    this.setState({term: event.target.value});
  }

	onFormSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}

  render() {
    return (
      <div className="ui-segment">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
							value={this.state.term}
              placeholder="Search"
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
