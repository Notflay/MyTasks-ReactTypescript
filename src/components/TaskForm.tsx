import { AiOutlinePlus } from "react-icons/ai";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Task } from "../interfaces/Task";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Props {
    newTask: (task: Task) => void
}

const initialState = {
    title: "",
    description: ""
}

export default function TaskForm({ newTask }: Props) {
    const [task, setTask] = useState(
        initialState
    );
    const taskInput = useRef<HTMLInputElement>(null)

    const handleInputChange = ({ target: { name, value } }: HandleInputChange) => {
        setTask({ ...task, [name]: value });
    }

    const handleNewTaskz = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        newTask(task)
        setTask(initialState)
        taskInput.current?.focus()
    }

    return (
        <div className="card card-body bg-secondary text-black">
            <h1>Add task</h1>
            <form action="" onSubmit={handleNewTaskz}>
                <input
                    type="text"
                    placeholder="Write a title"
                    name="title"
                    className="form-control mb-3 rounded-0 shadow-none border-0"
                    onChange={handleInputChange}
                    value={task.title}
                    autoFocus
                    ref={taskInput}
                />
                <textarea
                    name="description"
                    rows={2}
                    placeholder="Write a description"
                    className="form-control mb-3 shadow-none border-0"
                    onChange={handleInputChange}
                    value={task.description}
                ></textarea>
                <button className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}
