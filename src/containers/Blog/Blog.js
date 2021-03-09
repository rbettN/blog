import React, { Component } from 'react';
//import axios from '../../axios'
/*The Route component needs to be imported for routing*/
/*The Link component allos the creation of Links for switching pages (routing)*/
import { Route, Link } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';

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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*exact is a boolean property*/}
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/> 
                <Route path="/" render={() => <h1>Home 2</h1>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;