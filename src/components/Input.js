const Input = (props) => {
  return (
    <div>
      <label>
        <input className={props.className} type="text" name="name" placeholder={props.placeholder}/>
      </label>
    </div>
  );
};
export default Input;
