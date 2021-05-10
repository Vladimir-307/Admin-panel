import styles from './SearchBar.module.css';
import String from '../SearchString/SearchString';
import Button from '../Button/Button';
import iconFilter from './icons/filter.svg';

function SearchBar(){

    const icon_Filter = <img src={iconFilter} />;

    return(
        <div className={styles.searchbar}>
            <String />
            <div className={styles.button}>
                <Button icon={icon_Filter} label="Фильтры" isDarkStyle={true} />
            </div>
        </div>
    );
}

export default SearchBar;