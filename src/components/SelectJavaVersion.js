import React from "react";
//import "./App.css";
//import { versionJson } from "./JavaVersions";
class SelectJavaVersion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        selectedjavaversion : '',
        versionsJson : [
          {
            "id":1,
            "version": "Foo"
          },
          {
            "id":2,
            "version": "Bar"
          },
          {
            "id":3,
            "version": "asd"
          },
          {
            "id":4,
            "version": "gfh"
          }
        ]
        };
        this.submitJavaVersion = this.submitJavaVersion.bind(this);
        this.handleChange = this.handleChange.bind(this);
        }
  submitJavaVersion(event) {
    //event.preventDefault();
    this.setState({selectedjavaversion: event.target.value});
    //const { selectedjavaversion } = this.state;
    //const { onSendVersion } = this.props;
    //onSendVersion(selectedjavaversion);
    const varjava = this.state.selectedjavaversion;
    console.log("this in called on change");
    console.log("this is submitJavaVersion", varjava);
    this.props.onSendVersion(event.target.value);


    //this.setState({ image: '' });
  }
  handleChange() {
    const temp = this.state.selectedjavaversion;
    console.log("this is value",temp);
    return temp;
    //this.setState({selectedjavaversion: event.target.value});
    //submitJavaVersion();
    }
render()
{
  return (
      <div>
            <label htmlFor="selectjavaversions">Select the java version</label>
            <select onChange = {this.submitJavaVersion.bind(this)}>
             {this.state.versionsJson.map((e, key) => {
                  return <option key={key} value={e.version}>{e.version}</option>;
                        })}
         		</select>
       </div>
    );
}
}

export default SelectJavaVersion;