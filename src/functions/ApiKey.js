export const ApiKey = ()=>{

    const keys = [process.env.REACT_APP_RAPID_API_KEY,process.env.REACT_APP_RAPID_API_KEY2];
    if(Math.floor(Math.random() * 10)%2===0)
        return keys[0];
    else
        return keys[1];

}