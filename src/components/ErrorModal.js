import Card from './Card';
import Button from './Button';
import './ErrorModal.css';

const ErrorModal = (props) => {

  const closeModal = _ => {};
  
  return <div>
    <div className='backdrop'></div>
    <Card >
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
      <div className='content'>
        <p>{props.message}</p>
      </div>
      <footer className='actions'>
        <Button onClickHandler={closeModal} text={'OK'}></Button>
      </footer>
    </Card>
  </div>
}

export default ErrorModal;