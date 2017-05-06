import React, { Component } from 'react';
import './Content.css';
import { Button } from 'react-bootstrap';


class Content extends Component {
  render() {
    return (
        <div>
            {this.props.children}
            Hello React
            <Button bsStyle="danger" >Default</Button>
        </div>
      
    );
  }
}

export default Content;