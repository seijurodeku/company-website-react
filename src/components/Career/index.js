import React, { Component } from 'react';

import Cover from '../Career/Home';
import PostList from '../Career/List';
import axios from 'axios';

class Career extends Component {

    render(){
        return (
            <div>
                {/* <Cover /> */}               
                <PostList />    
            </div>
        );
    }
}

export default Career;