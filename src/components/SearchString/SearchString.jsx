import styles from './SearchString.module.css';
import cc from 'classcat';

function SearchString({placeholder, isDarkStyle}){

    const inputStyle = cc({
        [styles.input]: true,
        [styles.input_dark]: isDarkStyle
    });

    return(
        <div>
            <input className={inputStyle} type="search" placeholder={placeholder}/>
        </div>
    );
}

export default SearchString;