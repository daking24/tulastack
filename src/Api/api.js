import axios from 'axios';

export default axios.create({
    baseURL: `https://tulastack-app.herokuapp.com/api/`
})