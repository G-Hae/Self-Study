import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IForm{
    toDo: string;
}

function CreateToDO(){
    const setTodos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {register, handleSubmit, setValue} = useForm<IForm>();

    const handleValid =({toDo}: IForm)=>{
        setTodos((oldToDos) => [
            {text: toDo, id:Date.now(), category},
             ...oldToDos,
            ]);
        setValue("toDo","");
    };

    return<div>
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo",{
                required: "Please write a To Do",
            })} placeholder="Write a todo"/>
            <button>Add</button>
        </form>
    </div>         

}

export default CreateToDO;