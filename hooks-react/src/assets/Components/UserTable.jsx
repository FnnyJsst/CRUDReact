import React from 'react';
//On récupère ici les fonctions passées en props dans App.jsx
export default function UserTable({ users, onUserDelete, onUserEdit }) {
  return (
    <div>
      <h2>View users</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {//On utilise map pour afficher les utilisateurs
          users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => onUserEdit(user.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => onUserDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
