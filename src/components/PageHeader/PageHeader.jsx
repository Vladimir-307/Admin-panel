import styles from './PageHeader.module.css';
import Button from '../Button/Button';
import IconButton from '../../icons/sun';

function PageHeader(){
    let isDarkStyle = false;
    const colorFill = isDarkStyle ? "#ffffff" : "#459DF5";
    const iconSun = <IconButton fill={colorFill}/>;

    return(
        <div className={styles.header}>
            <div className={styles.title}>
                Список заказов
            </div>
            <Button icon={iconSun} label="Светлая тема" isDarkStyle={isDarkStyle} />
        </div>
    );
}

export default PageHeader;