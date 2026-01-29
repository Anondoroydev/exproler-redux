import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "Mgp1I3C_5a307iqC2HCr9",
      isCompleted: false,
      title: "fagfasg",
      description: "sazgasg",
      priority: "low",
      dueDate: "2025-07-03T18:00:00.000Z",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompletState: (state, action: PayloadAction<string>) => {
      console.log(action)
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
  },
});

export const selectTasks = (state: RootState) => {
 
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask,toggleCompletState} = taskSlice.actions;

export default taskSlice.reducer;
