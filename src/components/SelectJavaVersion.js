import React from "react";
//import "./App.css";
//import { versionJson } from "./JavaVersions";
class SelectJavaVersion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        versionJson : [
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
render()
{
  return (
    <>
      <div>
            <label htmlFor="selectjavaversions">Select the java version</label>
            <select>
             {this.state.versionJson.map((e, key) => {
                  return <option key={key} value={e.version}>{e.version}</option>;
                        })}
         		</select>
       </div>
    </>
    );
}
}

export default SelectJavaVersion;