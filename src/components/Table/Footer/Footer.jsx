import styles from './Footer.module.css';
import Button from '../../Button/Button';
import iconPencil from './icons/pencil.svg';
import iconBin from './icons/bin.svg'

function TableFooter(){
    const icon_Pencil = <img src={iconPencil}/>;
    const icon_Bin = <img src={iconBin}/>;

    return(
        <div className={styles.footer}>
            <Button label="Выбрано записей: 5" isSlim={true}/>
            <Button icon={icon_Pencil} label="Изменить статус" isDarkStyle={true} isSlim={true}/>
            <div className={styles.button_delete}>
                <Button icon={icon_Bin} label="Удалить" isRed={true} isSlim={true}/>
            </div>
        </div>
    );
}

export default TableFooter;