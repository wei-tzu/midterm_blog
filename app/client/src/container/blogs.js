import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './blog.css';
import Blog from './blog';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [], };
    }
    componentDidMount() {
      this.getArticlesFromDb();
    }
    getArticlesFromDb = async () => {
        await fetch('http://localhost:3001/api/getArticles')
        .then(res => { return res.json() })
        .then(res => {
            this.setState(() => ({ data: res.data }));
        })
        .catch((err) => console.error(err));
    }
    render() {
      const { data } = this.state;
      return (
        <div>
            <NavLink to="/post_blog">
            <button class="btn post-actions__addPost">
                Add post
            </button></NavLink>
            {data.map(dat => ( 
                <Blog id={dat.id} title={dat.title} content={dat.content} author = {dat.author}/> 
            ))}
        </div>
      );
    }
  }
  
  export default Blogs;

