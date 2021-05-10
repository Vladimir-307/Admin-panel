import styles from './Input.module.css';
import cc from 'classcat';

function Input({label, placeholder, state, isDarkStyle}){

    const isLocked = state === "locked";
    const inputStyle = cc({
        [styles.input]: true,
        [styles.input_dark]: isDarkStyle,
        [styles.invalid]: state === "invalid",
        [styles.locked]: isLocked,
    });

    return(
        <div className={styles.container}>
            <label>{label}</label>
            <input className={inputStyle} type="search" disabled={isLocked} placeholder={placeholder} />
        </div>
    );
}

export default Input;