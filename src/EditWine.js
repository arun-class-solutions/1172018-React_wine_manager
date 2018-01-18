import React, { Component } from "react";
import axios from "axios";
import update from "immutability-helper";

class EditWine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      grapes: "",
      country: "",
      description: "",
      price: 0,
      year: 0,
      region: "",
      picture: ""
    }
  }

  componentDidMount() {
    axios
    .get(`http://myapi-profstream.herokuapp.com/api/1717fb/wines/${this.props.match.params.id}`)
    .then((response) => {
      this.setState(response.data);
    });
  }

  handleChange(event) {
    this.setState(update(this.state, {
      $merge: {
        [event.target.name]: event.target.value
      }
    }));
  }

  handleSubmit() {
    axios
    .put(`http://myapi-profstream.herokuapp.com/api/1717fb/wines/${this.props.match.params.id}`, this.state)
    .then((response) => {
      this.props.history.push("/wines");
    });
  }

  render() {
    return (
      <div className="container well margin-top-20 small-container">
      	<div>
      		<a href="">Go Back</a>
      	</div>
      	<div className="bold margin-top-20">
      		Name
      	</div>
      	<div className="margin-top-20">
      		<input onChange={this.handleChange.bind(this)} name="name" value={this.state.name} type="text" className="form-control" />
      	</div>
      	<div className="bold margin-top-20">
      		Year
      	</div>
      	<div className="margin-top-20">
      		<input onChange={this.handleChange.bind(this)} name="year" value={this.state.year} type="text" className="form-control" />
      	</div>
      	<div className="bold margin-top-20">
      		Grapes
      	</div>
      	<div className="margin-top-20">
      		<input onChange={this.handleChange.bind(this)} name="grapes" value={this.state.grapes} type="text" className="form-control" />
      	</div>
      	<div className="bold margin-top-20">
      		Country
      	</div>
      	<div className="margin-top-20">
      		<input onChange={this.handleChange.bind(this)} name="country" value={this.state.country} type="text" className="form-control" />
      	</div>
      	<div className="bold margin-top-20">
      		Region
      	</div>
      	<div className="margin-top-20">
      		<input onChange={this.handleChange.bind(this)} name="region" value={this.state.region} type="text" className="form-control" />
      	</div>
      	<div className="bold margin-top-20">
      		Price
      	</div>
      	<div className="margin-top-20">
      		<input onChange={this.handleChange.bind(this)} name="price" value={this.state.price} type="text" className="form-control" />
      	</div>
      	<div className="bold margin-top-20">
      		Picture
      	</div>
      	<div className="margin-top-20">
      		<input onChange={this.handleChange.bind(this)} name="picture" value={this.state.picture} type="text" className="form-control" />
      	</div>
      	<div className="bold margin-top-20">
      		Description
      	</div>
      	<div className="margin-top-20">
      		<textarea onChange={this.handleChange.bind(this)} name="description" value={this.state.description} className="form-control"></textarea>
      	</div>
      	<div className="margin-top-20">
      		<a href="" className="btn btn-default">Cancel</a>
      		<button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-success">Submit Edits</button>
      	</div>
      </div>
    );
  }
}

export default EditWine;
