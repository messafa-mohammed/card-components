import style from './Student.module.css'
function Student(props){
    return(
        <div className={style.card}>
            <h2 className={style.title} >firstname: {props.first}</h2>\
            <h2 className={style.title} >lastname: {props.last}</h2>
            <p className={style.text}> Like music: {props.music ? "Yes":"No"} </p> 
        </div>
    );
}
export default Student