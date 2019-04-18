import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ContentPage from '../components/Content';

import Login from '../components/Admin/Login';
import Register from '../components/Admin/Register';
import NewPost from '../components/Admin/NewPost';
import ApplicationDetail from '../components/Admin/ApplicationDetail';
import Applications from '../components/Admin/Applications';
import PositionApplications from '../components/Admin/PositionApplications';

import Career from '../components/Career';
import DetailPost from '../components/Career/Detail';
import Apply from '../components/Career/Apply';

import ProtectedRoute from './protectedRoute';

import { MDBIcon } from 'mdbreact';

import ScrollToTop from 'react-scroll-up';

import { library } from '@fortawesome/fontawesome-svg-core';

import firebase from '../firebase';

import {
  faFacebookF,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faLinkedinIn, faTwitter);

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          authenticated: false
      }
  };

  componentDidMount() {
      console.log(this.state.authenticated);
      firebase.auth().onAuthStateChanged((user) => {
        user
        ? 
        this.setState({
          authenticated: true
        })
        :
        this.setState({
          authenticated: false
        })
        console.log(this.state.authenticated);
      })
  }

  render() {
    return (
      <Router>
        <div>

          <div className='body'>
            <Switch>
              <Route authenticated={this.state.authenticated} exact path='/admin' component={Login} />
              <Route path='/register' component={Register} />
              <Route exact path='/career' component={Career} />
              <ProtectedRoute authenticated={this.state.authenticated} path='/admin/newpost' component={NewPost} />
              <Route exact path='/career/:id' component={DetailPost} />
              <Route path='/career/:id/apply/' component={Apply} />
              <Route exact path='/' component={ContentPage}/>
              <ProtectedRoute authenticated={this.state.authenticated} exact path='/admin/applications' component={Applications} />
              <ProtectedRoute authenticated={this.state.authenticated} exact path='/admin/applications/:postId' component={PositionApplications} />
              <ProtectedRoute authenticated={this.state.authenticated} path='/admin/applications/:postId/:applyid' component={ApplicationDetail} />
              {/* <Redirect to='/' /> */}
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
