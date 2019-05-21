import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import './blog.css';
export default ({ id, title, author, content }) => {
    return (
        <div class="widget-post" aria-labelledby="post-header-title">
            <div class="widget-post__header">
            <h2 class="widget-post__title">{title}</h2>
                <span> by <b>{author}</b></span>
            </div>
            <form class="widget-post__form">
                <div class="widget-post__content">
                    <div class="widget-post__textarea scroller" placeholder="share your moments">
                        <p>{content}</p>
                    </div>
                </div>
                <div class="widget-post__actions post--actions">
                    <div class="post-actions__widget">
                    <NavLink to= {"/blog/" + id}><button class="btn post-actions__publish">Read  More ...</button></NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
}

