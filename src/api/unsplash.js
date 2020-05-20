import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID _JQezOEgjNcas1S_QSnBD2o2h0Tulbgwzh8FbzrqJ-o",
      }
});