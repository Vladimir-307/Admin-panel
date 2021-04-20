import React from "react";
import './TableStyle.css';
import Header from './TableHeader';
import Footer from './TableFooter';
import Body from './TableBody';

class TableWrapper extends React.Component{

    render(){
        return(
            <div className="TableWrapper">
                <Header/>
                <Body/>
                <Footer/>    
            </div>
        );
    }

}

export default TableWrapper;