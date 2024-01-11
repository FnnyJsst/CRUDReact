import React, { useState, useEffect } from 'react';

export default function UserForm({ onUserAdd, onUserEdit, onUserUpdate, idCounter }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (onUserEdit) {
      setName(onUserEdit.name);
      setUsername(onUserEdit.username);
    }
  }, [onUserEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: onUserEdit ? onUserEdit.id : idCounter,
      name,
      username,
    };

    if (onUserEdit) {
      onUserUpdate(newUser);
    } else {
      //onUSerAdd fait appel à la fonction handleAddUser de App.jsx
      onUserAdd(newUser);
    }

    // Réinitialisation des champs du formulaire
    setName('');
    setUsername('');
  };

  return (
    <div>
      
      <h2>{
        //On vérifie si l'utilisateur est en cours d'édition existe. Si il a une valeur, on utilise ses propriétés name et username pour mettre 
        //à jour le formulaire. Sinon, on affiche "Ajouter des utilisateurs"
        onUserEdit ? 'Modifier l\'utilisateur' : 'Ajouter des utilisateurs'}</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Nom</label>
          <input
            className='form-control form-control-lg'
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Nom d'utilisateur</label>
          <input
            className='form-control form-control-lg'
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          {onUserEdit ? 'Modifier' : 'Ajouter'}
        </button>
      </form>
    </div>
  );
}
