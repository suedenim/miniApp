import React, { useState } from 'react';
import Card from './components/Card';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState('')

  const addNewUser = (user) => {
    const newUsers = [user, ...users];
    setUsers(newUsers);
  }

  return (
    <div>
      <Card> 
        <UserInput onAddNewUser={addNewUser} />
      </Card>

      <Card>
        <UserList users={users} />
      </Card>
    </div>
  );
}

export default App;
