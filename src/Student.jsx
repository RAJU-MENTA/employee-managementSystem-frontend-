
function Student(props){
    return(
        <div>
        <h1>{props.name}</h1>
        <h2>{props.dept}</h2>
        <h3>{props.course}</h3>
    </div>
    );
}
export default Student;