import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '665e6a24e5de4308942041ea41cf6fec'
    }
});