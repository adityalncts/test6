//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import ZipForm from './ZipForm';
import { get } from 'axios';

class ImageVersions extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    image: '',
    versions: [],
  };
  this.onFormSubmit = this.onFormSubmit.bind(this);
  this.sendImageVersions = this.sendImageVersions.bind(this);
}

async onFormSubmit(image) {
  this.setState({ image });
    var api = `https://cors-anywhere.herokuapp.com/https://registry.hub.docker.com/v1/repositories/${image}/tags`;
    var imagejson = await get(api,{'mode':'no-cors'})//.then(({response}) => {
    console.log(imagejson.data);
      //const { list: versions } = response.data;
    //get(api).then((response) => response.json()).then((data) => console.log('This is your data in get', data));
      //this.setState({ image });
   this.setState({ versions: imagejson.data });
    //});
}
sendImageVersions(v) {
v.preventDefault();
const { versions } = this.state;
const { onImageSent } = this.props;
onImageSent(versions);
//this.setState({})
}



  render() {
  const optiontemplate = this.state.versions.map(v => (
       					<option value={v.name}>{v.name}</option>
       					));
    return (
      <div className='imageversions'>
        <ZipForm onSubmit={this.onFormSubmit} />
        <select>
            {this.state.versions.map((e, key) => {
                return <option key={key} value={e.name}>{e.name}</option>;
            })}
         </select>
      </div>
    );
  }
}

export default ImageVersions;
