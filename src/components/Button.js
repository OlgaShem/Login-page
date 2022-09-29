const Button = (props) => {
  return (
    <button type={props.type} className={props.className} href={props.url} >
      {props.name}
    </button>
  );
};
export default Button;
