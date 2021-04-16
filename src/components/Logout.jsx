export function Logout() {
    if(localStorage.getItem("token") !== "empty"){
        localStorage.setItem("token", "empty");
        window.location.href = "/";
        
        
    }

    

    
}