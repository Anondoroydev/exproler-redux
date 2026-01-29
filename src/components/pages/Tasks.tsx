import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppselector } from "@/redux/hook";
import { AddTaskModal } from "../module/tasks/AddTaskModal";
import TaskCard from "../module/tasks/TaskCard";

const Tasks = () => {
  const tasks = useAppselector(selectTasks);

  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20 ">
      <div className="flex justify-between items-center ">
        <h3>this is Tasks</h3>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
