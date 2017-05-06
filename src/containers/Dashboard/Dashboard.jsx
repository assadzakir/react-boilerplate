import React, { Component } from 'react';
import './Dashboard.css';
import { NavHeader, SideMenu } from '../../components'

class Dashboard extends Component {
  render() {
    return (
        <div>
            <NavHeader />
            <SideMenu />
            <div>
                {this.props.children?React.cloneElement(this.props.children, {...this.props}):this.props.children}
            </div>
        </div>
      
    );
  }
}

export default Dashboard;