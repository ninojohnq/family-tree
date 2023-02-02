import React, { useState } from 'react';
import './App.css';
import './';

const FamilyTree = () => {
  const [family, setFamily] = useState([
    { name: 'Supring', relationship: 'Father' },
    { name: 'Alice', relationship: 'Mother' },
    { name: 'Nino', relationship: 'Son' },
    { name: 'Patrizia', relationship: 'Daughter in law' },
  ]);

  const [newMember, setNewMember] = useState({ name: '', relationship: '' });

  const addMember = (event) => {
    event.preventDefault();
    setFamily([...family, newMember]);
    setNewMember({ name: '', relationship: '' });
  };

  const updateMember = (index) => (event) => {
    event.preventDefault();
    const newFamily = [...family];
    newFamily[index] = { ...newFamily[index], [event.target.name]: event.target.value };
    setFamily(newFamily);
  };

  const deleteMember = (index) => (event) => {
    event.preventDefault();
    const newFamily = [...family];
    newFamily.splice(index, 1);
    setFamily(newFamily);
  };

  return (
    <div className='familylist'>
      <h1 className='title'>Simple CRUD App Family Tree</h1>
      <ol className='list'>
        {family.map((member, index) => (
          <li key={index}>
            Name: <input
              type="text"
              name="name"
              value={member.name}
              onChange={updateMember(index)}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            Relationship: <input
              type="text"
              name="relationship"
              value={member.relationship}
              onChange={updateMember(index)}
            />
            <button onClick={deleteMember(index)}>Delete</button>
          </li>
        ))}
      </ol>
      <h2>Add New Member</h2>
      <form onSubmit={addMember}>
      Name: <input
          type="text"
          name="name"
          value={newMember.name}
          onChange={(event) => setNewMember({ ...newMember, [event.target.name]: event.target.value })}
        />
        &nbsp;&nbsp;&nbsp;
        Relationship: <input
          type="text"
          name="relationship"
          value={newMember.relationship}
          onChange={(event) => setNewMember({ ...newMember, [event.target.name]: event.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FamilyTree;
