import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';

export default class FileDrop extends Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    // Do something with files
    this.props.onFileDropped(acceptedFiles[0]);
  };

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
          let styles = { ...baseStyle };
          styles = isDragActive ? { ...styles, ...activeStyle } : styles;
          styles = isDragReject ? { ...styles, ...rejectStyle } : styles;

          return (
            <div
              {...getRootProps()}
              style={styles}
              className={classNames('dropzone', {
                'dropzone--isActive': isDragActive
              })}
            >
              <input {...getInputProps()} />
              <p>Drop CSV here</p>
            </div>
          );
        }}
      </Dropzone>
    );
  }
}

const baseStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40vh',
  cursor: 'pointer',
  textAlign: 'center',
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5,
  fontSize: 'calc(10px + 2vmin)'
};
const activeStyle = {
  borderStyle: 'solid',
  borderColor: '#3b6d3a',
  backgroundColor: 'rgba(255, 255, 255, 0.1)'
};
const rejectStyle = {
  borderStyle: 'solid',
  borderColor: '#c66',
  backgroundColor: '#eee'
};
