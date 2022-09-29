const Poster = (props) => {
  return (
    <div className="poster-wrap">
      <img className="poster"
             src={props.url}
             alt={props.altName} />
    </div>
  );
};
export default Poster;
