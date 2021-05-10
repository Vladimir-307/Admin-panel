import styles from './Checkbox.module.css';
import cc from 'classcat';

function Checkbox({label, isDarkStyle}){

    const spanStyle = cc({
        [styles.checkbox_span]: true,
        [styles.checkbox_dark]: isDarkStyle
    });

    return(
        <div className={styles.checkbox}>
            <label className={styles.checkbox}>
                <input className={styles.checkbox_input} type="checkbox"/>
                <span className={spanStyle}>{label}</span> 
            </label>
        </div>
    );
}

export default Checkbox;