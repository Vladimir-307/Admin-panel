import styles from './FilterRow.module.css';
import Button from '../Button/Button';
import IconButton from '../../icons/refresh';
import SearchBar from '../SearchBar/SearchBar';

function FilterRow(){
    let isDarkStyle = false;
    const colorFill = isDarkStyle ? "#ffffff" : "#459DF5";
    const iconRefresh = <IconButton fill={colorFill}/>;

    return(
        <div className={styles.filterRow}>
            <SearchBar />
            <Button icon={iconRefresh} label="Загрузка" isDarkStyle={isDarkStyle} />
        </div>
    );
}

export default FilterRow;