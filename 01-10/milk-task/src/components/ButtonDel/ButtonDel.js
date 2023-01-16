import './ButtonDel.css';

const ButtonDel = ({ delFncProp }) => {
  return (
    <div>
      <button className="btn-del" onClick={delFncProp}>
        Delete
      </button>
    </div>
  );
};
export default ButtonDel;
