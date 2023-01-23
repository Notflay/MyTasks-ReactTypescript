import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
    tasks: Task[];
    deleteTask: (id: number) => void;
}


export default function Tasklist({ tasks, deleteTask }: Props) {
    return (
        <>
            {
                tasks.map((task, i: number) => {
                    return (
                        <div className="col-md-4 pb-2" key={i}>
                            <TaskCard task={task} deleteTask={deleteTask} />
                        </div>
                    )
                })
            }
        </>
    )
}
