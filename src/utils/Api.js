export const getUsers = callback => {
  fetch("https://koreanjson.com/users", { method: "GET" })
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.warn(error));
};

export const getUser = (id, callback) => {
  fetch(`https://koreanjson.com/users/${id}`, { method: "GET" })
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.warn(error));
};

export const getTodosByUserId = (id, callback) => {
  fetch(`https://koreanjson.com/todos?userId=${id}`, { method: "GET" })
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.warn(error));
};

export const getUserImage = (id, callback) => {
  fetch(`https://randomuser.me/api/portraits/men/${id}.jpg`, { method: "GET" })
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.warn(error));
};
