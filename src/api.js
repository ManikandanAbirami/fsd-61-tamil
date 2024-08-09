const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  const data = await response.json();
  return data;
};

export const fetchComments = async () => {
  const response = await fetch(`${BASE_URL}/comments`);
  const data = await response.json();
  return data;
};

export const fetchAlbums = async () => {
  const response = await fetch(`${BASE_URL}/albums`);
  const data = await response.json();
  return data;
};

export const fetchPhotos = async () => {
  const response = await fetch(`${BASE_URL}/photos`);
  const data = await response.json();
  return data;
};

export const fetchTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos`);
  const data = await response.json();
  return data;
};

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};
