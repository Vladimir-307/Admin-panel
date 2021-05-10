import styles from './Header.module.css';
import CheckBox from '../../Checkbox/Checkbox';

function TableHeader(){
    return(
        <div className={styles.header}>
            <div className={styles.checkbox}>
                <CheckBox/>
            </div>
            <div className={styles.number}>#</div>
            <div className={styles.date}>Дата</div>
            <div className={styles.status}>Статус</div>
            <div className={styles.count}>Позиций</div>
            <div className={styles.summ}>Сумма</div>
            <div className={styles.clientfio}>ФИО покупателя</div>
        </div>
    );
}

export default TableHeader;