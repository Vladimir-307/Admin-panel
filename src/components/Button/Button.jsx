import styles from "./Button.module.css";
import cc from "classcat";


function button({icon, label, isDarkStyle, isRed, isSlim, hendlerClick}){
    const buttonStyle = cc({
        [styles.button]: true,
        [styles.button_slim]: isSlim,
        [styles.button_red]: isRed,
        [styles.button_dark]: isDarkStyle
    });
    icon = icon ? <div className={styles.icon}>{icon}</div>: null;
    
    return(
        <div className={buttonStyle} onClick={hendlerClick}>
            {icon}
            <label className={styles.label}>{label}</label>
        </div>
    );
}

export default button;