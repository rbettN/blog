import React, { Component } from 'react';
//import axios from '../../axios'
/*The Route component needs to be imported for routing*/
/*The Link component allows the creation of Links for switching pages (routing).
The NavLink is similar to Link but it has extra props that allows styling for the active route*/
import { Route, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';
import Post from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/*the "to" property is the essentially the 'a href=""' but react router
                            will create the anchor tag and prevent the default, which would be to send
                            a new request and instead handle the click on itself*/}
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'    
                                }} >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*exact is a boolean property*/}
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/> 
                <Route path="/" render={() => <h1>Home 2</h1>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
                <Route path="/:id" exact component={Post}/>

            </div>
        );
    }
}

export default Blog;