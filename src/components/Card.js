const Card = (props) => {

  return <div style={{
    borderRadius: '12px',
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.25)'}}>
    {props.children}
  </div>;
}

export default Card;