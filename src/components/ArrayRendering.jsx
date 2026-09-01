import Student from "./Student";

function ArrayRendering(){
    const students=["Mahi","Dhoni","Virat","Rohit"]
    return(
        <div>
            <h2>Student List</h2>
            <ul>
                {
                    students.map((val , ind) =>{
                        const a=ind+2
                        return <li key={a}>{val}</li>
                    }
                )}
            </ul>
        </div>
    )
}

export default ArrayRendering;

export function Map() {
    const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];

    return (
        <div>
            {
                fruits.map((fruit,index) => (
                    <h2 key={index}>{index+1}. {fruit}</h2>
                ))
            }
        </div>
    );
};

export function ArrObj(){

    const Stu = [
  { id: 1, name: "Mahesh", age: 21, city: "Chennai" },
  { id: 2, name: "Ravi", age: 22, city: "Madurai" },
  { id: 3, name: "Arun", age: 20, city: "Coimbatore" }
];

    return(
        Stu.map((cl)=>(
            <div key={cl.id}>
                <h1> Name : {cl.name}</h1>
                <h1> Age : {cl.age}</h1>
                <h1> City : {cl.city}</h1>
            </div>
        ))
    )

}