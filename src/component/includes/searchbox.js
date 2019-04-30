import React, { Component } from 'react';
import {withRouter,Route } from "react-router-dom";

const Keyword = withRouter(props => <SearchBox {...props}/>);

class SearchBox extends React.Component {
    pathname = '';
    Something(){
        //  this.pathname = this.props.location;
        
         console.log(Route.location);
    }
    onFormSubmit = e => {
    //   e.preventDefault();
      this.Something();
    //   const { name, email } = this.state;
    //   history.push('?first_name=' + this.keyword)
    }
    render() {
      return (
            <div className="search-container">
                <input  onKeyDown={this.onFormSubmit} type="text"></input>
                {this.pathname}
            </div>
      );
    }
  }

  
  export default SearchBox;
  