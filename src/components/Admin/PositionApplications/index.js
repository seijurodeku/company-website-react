import React, { Component, useRef } from 'react';
import { 
    // MDBDataTable,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn
} from 'mdbreact';

import { Link } from 'react-router-dom';

import firebase from '../../../firebase';

class emailApplications extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loadingPost: true,
      loadingApplications: true,
      detail: [],
      application: [],
      position_title: ''
    }
  }

  componentDidMount() {
    const postRef = firebase.database().ref('career').orderByKey().equalTo(this.props.match.params.postId);
    postRef.on('value', (snapshot) => {
        let post = snapshot.val();
        let fetchedPost = [];
        console.log("Get request for apply.")
        for (let key in post) {
            fetchedPost.push({
                ...post[key],
                id: key
            })
        }
        this.setState({
            detail: fetchedPost,
            position_title: fetchedPost[0].position_title,
            loadingPost: false
        })
    })

    const appRef = firebase.database().ref('application').orderByChild('postKey').equalTo(this.props.match.params.postId);
    appRef.on('value', (snapshot) => {
        let app = snapshot.val();
        let fetchedApplication = [];
        console.log("Get request for apply.")
        for (let key in app) {
            fetchedApplication.push({
                ...app[key],
                id: key
            })
        }
        this.setState({
            application: fetchedApplication,
            loadingApplication: false
        })
    })
  }

  render() {
    const { loadingPost, loadingApplications } = this.state; 
    return(
      <div className='bg-grey'>
        {loadingPost && loadingApplications 
          ?
            <MDBIcon 
                icon="cog" 
                spin 
                size="3x" 
                fixed
                className='loading-detail tablet' />
            :
              <MDBContainer className='position-table'>
                <MDBRow>
                    <MDBCol>
                        <center><h2 className='position-heading'>{this.state.position_title}</h2></center>
                    </MDBCol>
                </MDBRow>
                <hr/>
                
                <MDBRow>
                    <MDBCol style={{overflowX: 'auto'}}>
                      <table>
                        <tr>
                          <th><strong>Name</strong></th>
                          <th><strong>Email</strong></th>
                          <th><strong>Phone</strong></th>
                          <th><strong>Address</strong></th>
                        </tr>
                        {
                          this.state.application.map(app => (
                            
                              <tr>
                                <td>
                                  <Link 
                                    to={'/admin/applications/' + this.props.match.params.postId + '/' + app.id} 
                                  >
                                    {app.firstName + ' ' + app.lastName}
                                  </Link>
                                </td>
                                <td>{app.email}</td>
                                <td>{app.phone}</td>
                                <td>{app.address}</td>
                              </tr>
                              
                          ))
                        }
                      </table>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                      <Link to='/admin/applications'>                                    
                          <MDBBtn outline 
                              className='btn-get-started career-apply mt-4'
                          >
                              <MDBIcon icon='angle-double-left' /> Back
                          </MDBBtn>
                      </Link>
                  </MDBCol>
                </MDBRow>
                    
              </MDBContainer>
        } 
      </div>
    );
  }
} 
  

export default emailApplications;