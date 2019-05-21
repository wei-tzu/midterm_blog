import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './blog.css';
import axios from "axios";
import Blog from './blog';
var pasta = require('../pic/pasta.jpeg')
class Post_blog extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [],
                     author: '',
                     title: '', 
                     content: '',
                     lastid:'' };
    }
    componentDidMount() {
        this.getArticleFromDb();
    }
    getArticleFromDb = async () => {
        await fetch('http://localhost:3001/api/getArticle')
        .then(res => { return res.json() })
        .then(res => {
            this.setState(() => ({ data: res.data }));
        })
        .catch((err) => console.error(err));
    }

    putArticleToDB = () => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = currentIds.length; 
        ++idToBeAdded;
        let title = this.state.title
        let author = this.state.author
        let content =  this.state.content
        axios.post("http://localhost:3001/api/putArticle", {
            id: idToBeAdded,
		    title: title,
		    content: author,
		    author: content,
        });
    }
    render() {
      return (
        <div class="widget-post" aria-labelledby="post-header-title">
            <div class="widget-post__header">
                <h2 class="widget-post__title" id="post-header-title">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                    write post
                </h2>
            </div>
            <form id="widget-form" class="widget-post__form" name="form" aria-label="post widget">
                <div class="widget-post__title" style={{height:'50px'}}>
                    <textarea type="text" onChange={e => this.setState({ title: e.target.value })} placeholder="Title" value={this.state.title} />
                    <br /><textarea type="text" onChange={e => this.setState({ author: e.target.value })} placeholder="Author..." name="author" value={this.state.author} />
                </div>
                <p> - </p>
                <div class="widget-post__content" style={{height:'145px'}}>
                    <textarea className="widget-post__textarea scroller" name="post" onChange={e => this.setState({ content: e.target.value })} placeholder="Share your thoughts here" value={this.state.content} />
                </div>
                <div class="widget-post__actions post--actions">
                    <div class="post-actions__widget">
                        <button class="btn post-actions__publish" onClick={this.putArticleToDB}>publish</button>
                    </div>
                </div>
            </form>
        </div>
      );
    }
  }
  
  export default Post_blog;