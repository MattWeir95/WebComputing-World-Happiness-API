//Sets the users token to "empty" which in turns makes them logged out.
//Returns them to the homepage
export function Logout() {
  if (localStorage.getItem("token") !== "empty") {
    localStorage.setItem("token", "empty");
    window.location.href = "/";
  }
}
