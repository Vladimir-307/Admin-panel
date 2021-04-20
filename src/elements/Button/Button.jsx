import "./Button.css";


function button(props){
    return(
        <div className='button' onClick={props.hendlerClick}>
            <div className="button-icon">
                <img src={props.icon} />
            </div>
            <div className="button-label">
                {props.label}
            </div>
        </div>
    );
}

export default button;