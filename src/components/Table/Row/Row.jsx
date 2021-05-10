import styles from './Row.module.css';
import CheckBox from '../../Checkbox/Checkbox';
import Status from './Status/Status';

function Row({number, date, status, count, summ, clientFIO}){
    return(
        <div className={styles.row}>
            <div className={styles.checkbox}>
                <CheckBox />
            </div>          
            <div className={styles.number}>{number}</div>  
            <div className={styles.date}>{date}</div>  
            <div className={styles.status}>
                <Status value={status} />
            </div>  
            <div className={styles.count}>{count}</div>  
            <div className={styles.summ}>{summ + " ₽"}</div>  
            <div className={styles.clientfio}>{clientFIO}</div>  
        </div>
    );
}

export default Row;