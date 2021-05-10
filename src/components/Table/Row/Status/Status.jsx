import styles from './Status.module.css';
import cc from 'classcat';
import IconCheckmark from './icons/Checkmark';
import IconDot from './icons/dot';
import IconAbort from './icons/Abort'

function Status({value}){
    const style = cc({
        [styles.status]: true,
        [styles.new]: value === "New",
        [styles.calculation]: value === "Calculation",
        [styles.completed]: value === "Completed",
        [styles.rejected]: value === "Rejected",
        [styles.postponed]: value === "Postponed"
    });
    let icon = <IconDot fill="#FF8C56"/>;
    let label = value;

    switch (value) {
        case "New":
            label = "Новый";
            break;
        case "Calculation":
            label = "Расчет";
            icon = <IconDot fill="#459DF5"/>;
            break;
        case "Completed":
            label = "Выполнен";
            icon = <IconCheckmark fill="#0FB864"/>;
            break;
        case "Rejected":
            label = "Отменен";
            icon = <IconAbort fill="#000000"/>;
            break;
        case "Postponed":
            label = "Отложен";        
    }
    
    return(
        <div className={style}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.label}>{label}</div>
        </div>
    );
}

export default Status;