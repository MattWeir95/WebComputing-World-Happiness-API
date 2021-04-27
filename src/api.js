//API calls for the website

//API url to be modified to get back different data
const API_URL = "http://131.181.190.87:3000";

//Logged in token
const token = localStorage.getItem("token");

//Sends Login Post
export function SendLogin(email, password){
    const url = `${API_URL}/user/login`;
    return fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
}

//Gets Factors Json
export function GetFactors(url){
    const headers = {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      return(
          fetch(url, {headers})
      )


}

//Gets Rankings Json
export function GetRankings(){
    const RANKINGS_URL = API_URL + "/rankings"
    return(
        fetch(RANKINGS_URL)
    )
}


//Gets Country Json
export function GetCountries(){
    const COUNTRIES_URL = API_URL + "/countries"
    
    return(
        fetch(COUNTRIES_URL)
        .then(res => res.json())
        
    )
    
}


