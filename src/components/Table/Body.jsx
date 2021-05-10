import styles from './Table.module.css';
import Row from './Row/Row';

function TableBody(){

    let data = [
        {
            number: "123123",
            date: "15.02.2021, 18:00",
            status: "New",
            count: "6",
            summ: "101 907",
            clientFIO: "Пупкин Василий Васильевич"},
        {
            number: "123123",
            date: "15.02.2021, 18:00",
            status: "Completed",
            count: "6",
            summ: "101 907",
            clientFIO: "Пупкин Василий Васильевич"},
        {
            number: "123123",
            date: "15.02.2021, 18:00",
            status: "Rejected",
            count: "6",
            summ: "101 907",
            clientFIO: "Пупкин Василий Васильевич"},
        {
            number: "123123",
            date: "15.02.2021, 18:00",
            status: "Calculation",
            count: "6",
            summ: "101 907",
            clientFIO: "Пупкин Василий Васильевич"},
        {
            number: "123123",
            date: "15.02.2021, 18:00",
            status: "Postponed",
            count: "6",
            summ: "101 907",
            clientFIO: "Пупкин Василий Васильевич"}
    ];

    const rows = data.map(item=>
        <Row 
            number={item.number}
            date={item.date}
            status={item.status}
            count={item.count}
            summ={item.summ}
            clientFIO={item.clientFIO}
        />
    );

    return(
        <div className={styles.body}>
            {rows}                        
        </div>
    );
}

export default TableBody;