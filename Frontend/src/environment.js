let IS_PROD = true;


const server =  IS_PROD ? 
    "http://localhost:8000" :
     "https://video-conference-jt4z.onrender.com"


export default server;