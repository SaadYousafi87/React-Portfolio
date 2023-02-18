import React from 'react';
import {Link} from 'react-router-dom';

function Project(props){
    return (
        <div className='projects'>
            <h1 className='project-title'>{props.props.title}</h1>
            <Link to={props.props.gitLink}>Github</Link>
            <>{props.props.img}</>
        </div>
    );
}

export default Project;