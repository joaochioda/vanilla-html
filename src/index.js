import axios from "axios";
import "./style.scss";

run();

async function run() {
  const { data } = await axios.get("https://api.github.com/users/joaochioda");
  console.log(data);
  document.querySelector("#photo").src = data.avatar_url;
  document.querySelector("#user").innerHTML = data.login;
  document.querySelector("#app").href = data.html_url;
}
