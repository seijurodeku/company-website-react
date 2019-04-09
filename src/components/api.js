import axios from 'axios';

export default axios.create({
    baseURL: 'https://paynep-react.firebaseio.com'
});