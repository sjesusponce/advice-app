
const adviceAPI = async ()=>{
    return fetch('https://api.adviceslip.com/advice').then((result)=>result.json()).catch((err)=>{
        console.log('error on fetching api.adviceslip.com')
    })
}

export default adviceAPI