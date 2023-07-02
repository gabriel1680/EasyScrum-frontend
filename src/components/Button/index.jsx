import './style.css';

function Button({ text, variant, onClick }) {
    return <button type='button' className={`btn ${variant}`} onClick={onClick}>{text}</button>;
}

export default Button;

