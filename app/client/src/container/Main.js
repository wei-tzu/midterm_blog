import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Cards from '../container/cards'
import Talk from './talk';
import Blogs from './blogs';
import Post_blog from './post_blog';
import Blog_detail from './blog_detail';
import UpdateArticle from './update_blog';

export default class Main extends Component {
  render() {
      return (
        <div>
          <nav>
            <NavLink to="/home"><a><span>Home</span></a></NavLink>
            <NavLink to="/blog"><a><span>Blog</span></a></NavLink>
            <NavLink to="/talk"><a><span>Talk</span></a></NavLink>
          </nav>
          <Switch>
            <Route exact path="/home" component={Cards}/>
            <Route exact path="/talk" component={Talk}/>
            <Route exact path="/blog" component={Blogs}/>
            <Route path="/blog/:id?" component={Blog_detail} />
            <Route path="/updateArticle/:id?" component={UpdateArticle} />
            <Route exact path="/post_blog" component={Post_blog}/>
          </Switch>
        </div>
      );
    }
}
