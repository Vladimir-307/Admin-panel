import './PageHeader.css';
import Button from '../Button/Button';
import IconButton from '../../icons/sun.svg';

function PageHeader(){
    return(
        <div className="PageHeader">
            <div className="PageHeader-Title">
                Список заказов
            </div>
            <Button icon={IconButton} label="Светлая тема"/>
        </div>
    );
}

export default PageHeader;