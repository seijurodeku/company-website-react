// import React, { Component } from 'react';

// class emailApplications extends Component { 
//     render () {
//         return (
//             <h1>email Applications</h1>
//         );
//     }
// }

// export default emailApplications;

import React from 'react';
import { 
    MDBDataTable,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdbreact';

const emailApplications = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 400
      },
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 180
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        email: 'System Architect',
        phone: 'Edinburgh',
        address: '61'
      },
      {
        name: 'Garrett Winters',
        email: 'Accountant',
        phone: 'Tokyo',
        address: '63'
      },
      {
        name: 'Ashton Cox',
        email: 'Junior Technical Author',
        phone: 'San Francisco',
        address: '66'
      },
      {
        name: 'Cedric Kelly',
        email: 'Senior Javascript Developer',
        phone: 'Edinburgh',
        address: '22'
      },
      {
        name: 'Airi Satou',
        email: 'Accountant',
        phone: 'Tokyo',
        address: '33'
      },
      {
        name: 'Brielle Williamson',
        email: 'Integration Specialist',
        phone: 'New York',
        address: '61'
      },
      {
        name: 'Herrod Chandler',
        email: 'Sales Assistant',
        phone: 'San Francisco',
        address: '59'
      },
      {
        name: 'Rhona Davidson',
        email: 'Integration Specialist',
        phone: 'Tokyo',
        address: '55'
      },
      {
        name: 'Colleen Hurst',
        email: 'Javascript Developer',
        phone: 'San Francisco',
        address: '39'
      },
      {
        name: 'Sonya Frost',
        email: 'Software Engineer',
        phone: 'Edinburgh',
        address: '23'
      },
      {
        name: 'Jena Gaines',
        email: 'phone Manaddressr',
        phone: 'London',
        address: '30'
      },
      {
        name: 'Quinn Flynn',
        email: 'Support Lead',
        phone: 'Edinburgh',
        address: '22'
      },
      {
        name: 'Charde Marshall',
        email: 'Regional Director',
        phone: 'San Francisco',
        address: '36'
      },
      {
        name: 'Haley Kennedy',
        email: 'Senior Marketing Designer',
        phone: 'London',
        address: '43'
      },
      {
        name: 'Tatyana Fitzpatrick',
        email: 'Regional Director',
        phone: 'London',
        address: '19'
      },
      {
        name: 'Michael Silva',
        email: 'Marketing Designer',
        phone: 'London',
        address: '66'
      },
      {
        name: 'Paul Byrd',
        email: 'Chief Financial phoner (CFO)',
        phone: 'New York',
        address: '64'
      },
      {
        name: 'Gloria Little',
        email: 'Systems Administrator',
        phone: 'New York',
        address: '59'
      },
      {
        name: 'Bradley Greer',
        email: 'Software Engineer',
        phone: 'London',
        address: '41'
      },
      {
        name: 'Dai Rios',
        email: 'Personnel Lead',
        phone: 'Edinburgh',
        address: '35'
      },
      {
        name: 'Jenette Caldwell',
        email: 'Development Lead',
        phone: 'New York',
        address: '30'
      },
      {
        name: 'Yuri Berry',
        email: 'Chief Marketing phoner (CMO)',
        phone: 'New York',
        address: '40'
      },
      {
        name: 'Caesar Vance',
        email: 'Pre-Sales Support',
        phone: 'New York',
        address: '21'
      },
      {
        name: 'Doris Wilder',
        email: 'Sales Assistant',
        phone: 'Sidney',
        address: '23'
      },
      {
        name: 'Angelica Ramos',
        email: 'Chief Executive phoner (CEO)',
        phone: 'London',
        address: '47'
      },
      {
        name: 'Gavin Joyce',
        email: 'Developer',
        phone: 'Edinburgh',
        address: '42'
      },
      {
        name: 'Jennifer Chang',
        email: 'Regional Director',
        phone: 'Singapore',
        address: '28'
      }
    ]
  };

  return (
    <div className='bg-grey'>
        <MDBContainer className='position-table'>
            <MDBRow>
                <MDBCol>
                    <center><h2 className='position-heading'>Business Development Executive</h2></center>
                </MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol>
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        data={data}
                    />    
                </MDBCol>
            </MDBRow>
                
        </MDBContainer>    
    </div>
    
    
  );
}

export default emailApplications;