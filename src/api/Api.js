const API_KEY = 'KulUaQsk7pdtqSgLmhw96TASMMO2';
//get all the matches [upcoming]
export const getMatches=()=>{
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url).then(
        (response)=>response.json()
    ).catch(
        (error)=>console.log("ERROR:", error)
    );
}
// Load match details
export const getMatchDetails=(id)=>{
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}