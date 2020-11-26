import React, { Component } from 'react';
import ImageVersions from './ImageVersions';
class SelectImageVersions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        imagelist: [],
        };
        this.onGetList = this.onGetList.bind(this);
        }

onGetList(imagelist) {
this.setState({ imagelist });
}
render() {
    return (
      <div className='selectimageversions'>
        <ImageVersions onImageSent={this.onGetList} />
      </div>
    );
  }
}

export default SelectImageVersions;