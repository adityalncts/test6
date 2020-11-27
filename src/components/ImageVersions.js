//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import ZipForm from './ZipForm';
import { get } from 'axios';
import SelectJavaVersion from './SelectJavaVersion';

class ImageVersions extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    image: '',
    versions: [],
    selectedjavaversion: '',
  };
  this.onFormSubmit = this.onFormSubmit.bind(this);
  //this.sendImageVersions = this.sendImageVersions.bind(this);
  this.selectedJavaVersion = this.selectedJavaVersion.bind(this);
}

async onFormSubmit(image) {
  this.setState({ image });
  //this.setState({ selectedversion });
    var api = `https://cors-anywhere.herokuapp.com/https://registry.hub.docker.com/v1/repositories/${image}/tags`;
    var imagejson = await get(api,{'mode':'no-cors'})//.then(({response}) => {
    console.log(imagejson.data);
      //const { list: versions } = response.data;
    //get(api).then((response) => response.json()).then((data) => console.log('This is your data in get', data));
      //this.setState({ image });
   this.setState({ versions: imagejson.data });
    //});
}

selectedJavaVersion(varVersion) {
this.setState({ selectedjavaversion: varVersion });
const variable = varVersion;
console.log("this is selectedjavaversion");
console.log(variable);
}
  render() {
    return (
      <div className='imageversions'>
        <ZipForm onSubmit={this.onFormSubmit} />
        <label htmlFor="imageversions">Select the Base Image tag</label>
        <select>
            {this.state.versions.map((e, key) => {
                return <option key={key} value={e.name}>{e.name}</option>;
            })}
         </select>
         <SelectJavaVersion onSendVersion={this.selectedJavaVersion.bind(this)} />
      </div>
    );
  }
}

export default ImageVersions;
