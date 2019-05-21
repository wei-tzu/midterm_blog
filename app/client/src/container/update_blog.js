import React, { Component } from 'react';
import './blog.css';
import axios from "axios";

export default class UpdateArticle extends Component {
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
    updateArticleToDB = (idToUpdate, update_title, update_author, update_content) => {
        let objIdToUpdate = null;
        this.state.data.forEach(dat => {
          if (dat.id == idToUpdate) {
            objIdToUpdate = dat._id;
          }
        });
        axios.post("http://localhost:3001/api/updateArticle", {
          id: objIdToUpdate,
          update: { title: update_title, author: update_author, content: update_content }
        });
      };
    render() {
        const { id } = this.props.match.params;
        return id ? (
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
                            <button class="btn post-actions__publish" onClick={this.updateArticleToDB(this.props.match.params,this.state.title, this.state.author,this.state.content)}>changed</button>
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