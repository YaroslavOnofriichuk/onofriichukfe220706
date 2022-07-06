import "./button.css";

interface Props {
  onClick: () => void;
};

const Button = ({onClick}: Props) => {
  return (
    <div className="button-container">
      <button type="button" className="button" onClick={() => onClick()}>Describe Adobe</button>
    </div>
  )
};

export default Button;