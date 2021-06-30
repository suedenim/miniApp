import './UserList.css';

const UserList = (props) => {

  return <div className='users'>
    <ul>
    {
      props.users.length > 0 ? 
        props.users.map((user) => <li>{user.name} ({user.age} years old)</li>)
        : <div></div>
    }
    </ul>
  </div>
}

export default UserList;