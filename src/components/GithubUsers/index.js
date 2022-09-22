import React, { useEffect, useState } from "react";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  // fetch users  from github and display them.

  useEffect(() => {
    const url = "https://api.github.com/users";

    fetch(url)
      .then((data) => data.json())
      .then((githubUsers) => {
        setUsers(githubUsers);
      });
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4">
      {users.map((user) => (
        <GithubUserCard key={user.login} user={user} />
      ))}
    </div>
  );
};

//Second Component
const GithubUserCard = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} className="h-36 w-36 rounded mb-5" />
      <p>{user.login}</p>
      <button className="bg-green-500 mt-5 rounded px-2 py-1 text-white">
        Follow Me
      </button>
    </div>
  );
};

export default GithubUsers;
