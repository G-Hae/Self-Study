import {useForm} from "react-hook-form";

/*
function ToDoList(){
    const [toDo, setTodo] = useState("");
    const [toDoError, setToDoError] = useState("");

    const onChange =(event:React.FormEvent<HTMLInputElement>)=>{
        const {currentTarget: {value}, } = event;
        setToDoError("");
        setTodo(value);
    };

    const onSubmit =(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(toDo.length<10){
            setToDoError("To Do should be longer");
        } 
        console.log(toDo);
    };

    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={toDo} placeholder="Write a todo"/>
            <button>Add</button>
            {toDoError !==""? toDoError:null}
        </form>
    </div>;
}
*/

interface IForm{
    Email: string;
    firstName: string;
    lastName?: string;
    username: string;
    password?: string;
    password1?: string;
}


function ToDoList(){
    const {register, watch, handleSubmit, formState: {errors}} = useForm<IForm>({
        defaultValues: {
            Email:"@naver.com",
        },
    });
    const onValid = (data:any) =>{
        console.log(data);
    };
    console.log(errors?.Email?.message);
    return <div>
        <form style={{ display: "flex", flexDirection: "column"}}
        onSubmit={handleSubmit(onValid)}>
            <input {...register("Email", {
                required: "Email required", 
                pattern: {
                    value:/^[A-Za-z0-9._%+-]+@naver.com$/,
                    message: "Only naver.com emails allowed"
                }
                })} placeholder="Email"/>
            <span>{errors?.Email?.message}</span>
            <input {...register("firstName", {required: "Write Here!"})} placeholder="First Name"/>
            <span>{errors?.firstName?.message}</span>

            <input {...register("lastName", {required: "Write Here!"})} placeholder="Last Name"/>
            <span>{errors?.lastName?.message}</span>

            <input {...register("username", {required: "Write Here!", minLength:10})} placeholder="Username"/>
            <span>{errors?.username?.message}</span>

            <input {...register("password", {required: "Write Here!", minLength:5, maxLength:10})} placeholder="Password"/>
            <span>{errors?.password?.message}</span>

            <input {...register("password1", {required: "Password is required", minLength:{
                value: 5,
                message: "Your password is too short."
            },
            })} placeholder="Password1"/>
            <span>{errors?.password1?.message}</span>

            <button>Add</button>
        </form>
    </div>;
}

export default ToDoList;

