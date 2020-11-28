import React from 'react';
import SelectJavaVersion from './SelectJavaVersion';
import ImageVersions from './ImageVersions';
class DownloadDockerFile extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    image: '',
    selectedjavaversion: '',
    imagetag:'',
  };
   this.selectedJavaVersion = this.selectedJavaVersion.bind(this);
   this.onSendVersionAndTag = this.onSendVersionAndTag.bind(this);
  }

  selectedJavaVersion(varVersion) {
  this.setState({ selectedjavaversion: varVersion });
  const variable = varVersion;
  console.log("this is selectedjavaversion");
  console.log(variable);
  }

onSendVersionAndTag(version, imagename)
{
    this.setState({ imagetag: version });
    this.setState({ image: imagename });
}
render(){
    return(
    <div>
    <ImageVersions onSendVersionAndTag={this.onSendVersionAndTag.bind(this)} />
    <SelectJavaVersion onSendVersion={this.selectedJavaVersion.bind(this)} />
    </div>
    );
}

}
export default DownloadDockerFile;