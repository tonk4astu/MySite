import { create } from "zustand";
import {persist} from "zustand/middleware";

type TodoStore = {
    count: number;
    title: string;
    message: string;
    setTodo: (title: string,message:string) => void;
}

type AddList = {
}

const useTodoStore = create<TodoStore>()(
    persist(
        (set) => ({
            count: 0,
            title: '',
            message: '',
            setTodo: (title: string,message:string) => set(
                (state) => ({
                    count: state.count + 1,
                    title: title,
                    message: message
                })
            )
        }),
        {name:"todo-store"}
    )
);