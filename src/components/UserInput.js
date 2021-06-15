import React, {useState} from 'react';
import './UserInput.css';
import Button from './Button';

const UserInput = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = (_) => {
    if (!userName || userName.length <= 0) { 
      showError('Name is required'); 
      return; 
    }

    const newAge = Number.parseInt(userAge);
    if (Number.isNaN(newAge) || newAge <= 0) { 
      showError('Age must be greater than zero.'); 
      return; 
    }

    setUserName('');
    setUserAge('');
  };

  const showError = msg => alert(msg);

  const nameChanged = (evt) => setUserName(evt.target.value)

  const ageChanged = (evt) => setUserAge(evt.target.value);

  return <div className="input">
      <label htmlFor="username">Username</label>
      <input name="username" type='text' value={userName} onChange={nameChanged} />

      <label htmlFor="userage">Age (yrs)</label>
      <input name="userage" type="number" value={userAge} onChange={ageChanged} />

      <Button text={'Add User'} onClickHandler={addUserHandler} />
    </div>;
  
}

export default UserInput;