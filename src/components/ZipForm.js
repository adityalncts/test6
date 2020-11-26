import React, { Component } from 'react';

class ZipForm extends Component {
constructor(props) {
  super(props);

  this.state = {
    image: ''
  };
  this.inputUpdated = this.inputUpdated.bind(this);
  this.submitImageName = this.submitImageName.bind(this);
}
inputUpdated(e) {
  const { value } = e.target;
  this.setState({ image: value });
}
submitImageName(e) {
  e.preventDefault();

  const { image } = this.state;
  const { onSubmit } = this.props;

  onSubmit(image);
  this.setState({ image: '' });
}
  render() {
    return (
      <div className="zip-form">
        <form onSubmit={this.submitImageName}>
          <label htmlFor="zipcode">Enter the Base Image Name</label>
          <input
            className="form-control"
            type="input"
            name="image"
            value={this.state.image}
            onInput={this.inputUpdated} />
          <button type="submit" className='btn btn-success'>Get the image tags</button>
        </form>
      </div>
    );
  }
}

export default ZipForm;