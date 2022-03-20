import axios from "axios";

const GITHUB_URL = "https://api.github.com";
const gitHub = axios.create({
  baseURL: GITHUB_URL,
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await gitHub.get(`/search/users?${params}`);
  return response.data.items;
};

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const [user, repos] = await Promise.all([gitHub.get(`/users/${login}`), gitHub.get(`/users/${login}/repos?${params}`)]);

  return { user: user.data, repos: repos.data };
};

export const cleanUserBlogUrl = (url) => {
  if (url.includes("https://")) {
    url = url.replace("https://", "");
  } else if (url.includes("http://")) {
    url = url.replace("http://", "");
  }
  return url;
};
