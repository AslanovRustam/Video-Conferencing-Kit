import s from "./button.module.scss";

function Button({ text, type = "button", children, transparent, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.button} ${transparent && s.transparent}`}
    >
      {children}
      <span className={s.text}>{text}</span>
    </button>
  );
}

export default Button;
