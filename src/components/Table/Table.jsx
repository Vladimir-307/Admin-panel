import React from "react";
import styles from './Table.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body';

class Table extends React.Component{

    render(){
        return(
            <div className={styles.table}>
                <Header/>
                <Body/>
                <Footer/>    
            </div>
        );
    }

}

export default Table;