import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ContentPage from '../components/Content';
import Login from '../components/Admin/Login';
import Career from '../components/Career';
import NewPost from '../components/Career/NewPost';
import DetailPost from '../components/Career/Detail';
import Apply from '../components/Career/Apply';

import { MDBIcon } from 'mdbreact';

import ScrollToTop from 'react-scroll-up';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faFacebookF,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faLinkedinIn, faTwitter);

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <div className='body'>
            <Switch>
              <Route exact path='/admin' component={Login} />
              <Route exact path='/career' component={Career} />
              <Route path='/admin/newpost' component={NewPost} />
              <Route exact path='/career/:id' component={DetailPost} />
              <Route path='/career/:id/apply/' component={Apply} />
              <Route exact path='/' component={ContentPage}/>
              <Redirect to='/' />
            </Switch>
          </div>

          <ScrollToTop showUnder={160}>
            <span>
              <MDBIcon 
                icon='paper-plane' 
                size='2x'
                style={{
                  color: '#ff7f50'
                }} />
            </span>
          </ScrollToTop>
        </div>
      </Router>
    );
  }
}

export default App;
