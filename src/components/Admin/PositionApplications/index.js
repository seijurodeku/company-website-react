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

import ReactToPrint from 'react-to-print';

import API from '../../api';


class emailApplications extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      application: [],
      position_title: ''
    }
  }

  componentDidMount() {
    API.get('/career.json')
      .then(res=>{
        const fetchedPost = [];
          for (let key in res.data) {
              if(key === this.props.match.params.postId){
                  fetchedPost.push({
                      ...res.data[key],
                      id: key
                  })    
              }
          }
          this.setState({position_title: fetchedPost[0].position_title})
      })

    API.get('/application.json')
      .then(res => {
          const fetchedApplication = [];
          for (let key in res.data) {
              if(res.data[key]['postKey'] === this.props.match.params.postId){
                  fetchedApplication.push({
                      ...res.data[key],
                      id: key
                  })    
              }
          }
          console.log(fetchedApplication);
          this.setState({
              application: fetchedApplication,
              loading: false
          })
      })
      .catch(err => {
          console.log(err)
      })
  }

  render() {
    const { loading } = this.state; 
    return(
      <div className='bg-grey'>
        {loading 
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
                              // onClick={this.handleSubmit}
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