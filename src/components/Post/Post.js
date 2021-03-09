import React from 'react';
/*withRouter is a high order component which can be used to wrap the export. In this case, this allows props
from Posts to be passed on to Post (since Posts is the Post's nearest loaded route)*/
/*import { withRouter } from 'react-router-dom';*/

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;
/*export default withRouter(post);*/
