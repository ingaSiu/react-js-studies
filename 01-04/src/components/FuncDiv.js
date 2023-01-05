import FuncButton from './FuncButton';

const FuncDiv = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
      <FuncButton title={props.buttonText} {...props} />
    </div>
  );
};
//{...props} => props spreadinimas, kai prideda visus dive prirasytus props
export default FuncDiv;
