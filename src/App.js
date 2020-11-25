import logo from './logo.svg';
import './App.css';
import React from 'react';
import ZipForm from './components/ZipForm';
import { get } from 'axios';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    image: '',
    versions: [],
  };
  this.onFormSubmit = this.onFormSubmit.bind(this);
}

async onFormSubmit(image) {
  this.setState({ image });
    var api = "https://cors-anywhere.herokuapp.com/https://registry.hub.docker.com/v1/repositories/ubuntu/tags";
    var imagejson = await get(api,{'mode':'no-cors'})//.then(({response}) => {
    console.log(imagejson.data);
      //const { list: versions } = response.data;
    //get(api).then((response) => response.json()).then((data) => console.log('This is your data in get', data));
      //this.setState({ image });
   this.setState({ versions: imagejson.data });
    //});
}
  render() {
    return (
      <div className='app'>
        <ZipForm onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
