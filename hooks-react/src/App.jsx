import React, { useState } from 'react';
import UserTable from './assets/Components/UserTable';
import UserForm from './assets/Components/UserForm';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', username: 'john_doe' },
    { id: 2, name: 'Sheldon Cooper', username: 'shelly' }
  ]);

  // État pour compter les utilisateurs. L'id est à 3 car nous avons déjà deux utilisateurs dans le tableau
  const [idCounter, setIdCounter] = useState(3);
  const [editingUser, setEditingUser] = useState(null); // État de l'utilisateur en cours d'édition

  //Supprime l'utilisateur en filtrant le tableau pour exclure l'utilisateur avec l'ID donnée
  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  //Ajoute un nouvel utilisateur avec l'ID actuel du compteur
  const handleAddUser = (user) => {
    user.id = idCounter;
    setIdCounter(idCounter + 1);
    setUsers([...users, user]);
  };

  //Trouve l'utilisateur avec l'id correspondante et le met à jour avec les nouvelles valeurs
  const handleEditUser = (id) => {
    const userToEdit = users.find(user => user.id === id);
    setEditingUser(userToEdit);
  };

  // Met à jour l'utilisateur avec les nouvelles valeurs
  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map(user =>
      // Si l'id de l'utilisateur correspond à l'id de l'utilisateur mis à jour, mettez à jour l'utilisateur, sinon, renvoyez l'utilisateur
      user.id === updatedUser.id ? updatedUser : user 
    );
    setUsers(updatedUsers);
    setEditingUser(null); 
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <UserForm
          //En passant les fonctions en props, on peut les utiliser dans UserForm.jsx et UserTable.jsx
            onUserAdd={handleAddUser}
            onUserEdit={editingUser}
            onUserUpdate={handleUpdateUser}
          />
        </div>
        <div className="col-md-6">
          <UserTable users={users} onUserDelete={handleDelete} onUserEdit={handleEditUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
