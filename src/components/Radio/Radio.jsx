import styles from './Radio.module.css';
import cc from 'classcat';

function Radio({name, label, isDarkStyle}){

    const spanStyle = cc({
        [styles.radio_span]: true,
        [styles.radio_dark]: isDarkStyle
    });

    return(
        <div className={styles.radio}>
            <label className={styles.radio}>
                <input className={styles.radio_input} type="radio" name={name} />
                <span className={spanStyle}>{label}</span>
            </label>
        </div>
    );  
}

export default Radio;