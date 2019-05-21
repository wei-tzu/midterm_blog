import React, { Component } from 'react';
import './blog.css';
import Blog from './blog';
import axios from "axios";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
export default class Blog_detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [], 
            author: '',
            title: '', 
            content: ''};
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.getArticleFromDb(id);
    }
    getArticleFromDb = select_id => {
        const trans = {id: select_id}
        fetch('http://localhost:3001/api/getArticle', {
            method: 'POST',
            body: JSON.stringify(trans),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => { return res.json() })
        .then(res => {
            this.setState(() => ({ author: res.data.author, title: res.data.title, content: res.data.content }));
        })
        .catch((err) => console.error(err));
    }
    // deleteArticleFromDb = async () => {
    //     const { id } = this.props.match.params;
    //     let trans = { id: id };
    //     await fetch('http://localhost:3001/api/deleteArticle', {
    //         method: 'DELETE',
    //         body: JSON.stringify(trans),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => { return res.json() })
    //     .then(res => {
    //         if(res.success)
    //             console.log(res);
    //         else
    //             alert('Fail.');
    //     })
    //     .catch((err) => console.error(err));
    // }
    deleteArticleFromDb = idTodelete => {
        let objIdToDelete = null;
        this.state.data.forEach(dat => {
          if (dat.id == idTodelete) {
            objIdToDelete = dat._id;
          }
        });
    
        axios.delete("http://localhost:3001/api/deleteArticle", {
          data: {
            id: 0
          }
        });
        this.props.history.push('/blog');
      };

    render() {
        const { id } = this.props.match.params;
        return id ? (
            <div class="widget-post" aria-labelledby="post-header-title">
                <div class="widget-post__header">
                <h2 class="widget-post__title">{this.state.title}</h2>
                    <span> by <b>{this.state.author}</b></span>
                </div>
                <form class="widget-post__form">
                    <div class="widget-post__content">
                        <div class="widget-post__textarea scroller" placeholder="share your moments">
                            <p>{this.state.content}</p>
                        </div>
                    </div>
                    <div class="widget-post__actions post--actions">
                        <div class="post-actions__widget" style={{ marginLeft:"600px"}}>
                        <span >
                            <NavLink to={"/updateArticle/" + id}><button class="btn post-actions__edit">Edit ...</button></NavLink>
                            <button class="btn post-actions__edit" onClick={this.deleteArticleFromDb}>Delete ...</button>
                        </span>
                        </div>
                    </div>
                </form>
            </div>
        ) : (
            <div>
                <h3>Error: Post #{id} NOT FOUND</h3>
            </div>
        );
    }
}

