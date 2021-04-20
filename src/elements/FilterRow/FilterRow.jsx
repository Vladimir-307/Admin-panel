import './FilterRow.css';
import Button from '../Button/Button';
import IconButton from '../../icons/refresh.svg'

function FilterRow(){
    return(
        <div className="FilterRow">
            <div>
                Здесь будет строка поиска
            </div>
            <Button icon={IconButton} label="Загрузка"/>
        </div>
    );
}

export default FilterRow;