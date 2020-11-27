import React from "react";
//import "./App.css";
//import { versionJson } from "./JavaVersions";
class SelectJavaVersion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        selectedversion : '',
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
        }
  handleChange = (event) =>
    this.setState({selectedversion: event.target.value});
render()
{
  return (
    <>
      <div>
            <label htmlFor="selectjavaversions">Select the java version</label>
            <select value={this.state.selectedversion} onChange={this.handleChange}>
             {this.state.versionsJson.map((e, key) => {
                  return <option key={key} value={e.version}>{e.version}</option>;
                        })}
         		</select>
       </div>
    </>
    );
}
}

export default SelectJavaVersion;