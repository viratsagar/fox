import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state={
        isopen:false
    }
    handleToggle =()=>{
        this.setState({isopen:!this.isopen})
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container d-flex align-items-center px-4">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>
	      <form action="#" class="searchform order-lg-last">
          <div class="form-group d-flex">
            <input type="text" class="form-control pl-3" placeholder="Search"/>
            <button type="submit" placeholder="" class="form-control search"><span class="ion-ios-search"></span></button>
          </div>
        </form>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav mr-auto">
	        	<li class="nav-item active"><a href="/" class="nav-link pl-0">Home</a></li>
	        	<li class="nav-item"><a href="/about" class="nav-link">About</a></li>
	        	<li class="nav-item"><a href="/study" class="nav-link">Study</a></li>
	        	<li class="nav-item"><a href="/blogs" class="nav-link">blogs</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
        )
    }
}
