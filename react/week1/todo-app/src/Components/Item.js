import React, { Component } from 'react';
export default class Item extends Component {
render(){
    
        return(
          <div className='list-item'>
            *   {this.props.task}, {this.props.date}
           
          </div>
        );
      }
    }