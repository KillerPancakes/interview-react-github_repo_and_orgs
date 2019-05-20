import axios from "axios";

// Documentation is at https://developer.github.com/v3/
const BASE_URL = "https://api.github.com";

export { getUserData };

function getUserData(username) {
  return axios
    .all([
      axios.get(`${BASE_URL}/users/${username}`),
      axios.get(`${BASE_URL}/users/${username}/orgs`),
      axios.get(`${BASE_URL}/users/${username}/repos?per_page=250`)
    ])
    .then(([user, orgs, repos]) => ({
      user: user.data,
      orgs: orgs.data,
      repos: repos.data
    }));
}
