
import styles from './PopupWindow.module.css';
import cc from 'classcat';

function PopupWindow({children, isDarkStyle}){

    const popupStyle = cc({
        [styles.popupWindow]: true,
        [styles.popup_dark]: isDarkStyle
    });

    return(
        <div className={popupStyle}>
            {children}
        </div>
    );
}

export default PopupWindow;