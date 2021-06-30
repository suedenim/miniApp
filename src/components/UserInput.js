import React, {useState} from 'react';
import './UserInput.css';
import Button from './Button';
import ErrorModal from './ErrorModal';

const UserInput = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = (_) => {
    let errs = '';

    if (!userName || userName.length <= 0) { 
      errs = 'Name is required'; 
    }

    const newAge = Number.parseInt(userAge);
    if (Number.isNaN(newAge) || newAge <= 0) { 
      errs += 'Age must be greater than zero.'; 
    }

    if (errs.length > 0) {
      showError(errs);
      return;
    }

    resetInputs();

    props.onAddNewUser({ 'name': userName, 'age': newAge });
  };

  const resetInputs = _ => {
    setUserName('');
    setUserAge('');
  }

  const showError = msg => alert(msg);

  const nameChanged = (evt) => setUserName(evt.target.value)

  const ageChanged = (evt) => setUserAge(evt.target.value);

  return <div>
      <ErrorModal title='test' message='test m' />
      <div className="input">
        <label htmlFor="username">Username</label>
        <input name="username" type='text' value={userName} onChange={nameChanged} />

        <label htmlFor="userage">Age (yrs)</label>
        <input name="userage" type="number" value={userAge} onChange={ageChanged} />

        <Button text={'Add User'} onClickHandler={addUserHandler} />
      </div>
    </div>;
  
}

export default UserInput;