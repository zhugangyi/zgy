import axios from 'axios'
const uitls = {
    axiosMethod: (config)=>{
        axios({
            method:config.method,
            url:config.url,
            // headers:config.headers ? config.headers : null,
            params:config.params ? config.params : null,
            data : config.data ? config.data :null,
        }).then(config.callback).catch(config.catch ? config.catch :( ) =>{})
    }
}
export default uitls 