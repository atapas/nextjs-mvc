export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const tasks: Task[] = []; // Simulated in-memory database

export const TaskModel = {
  getAll: () => tasks,
  addTask: (title: string) => {
    const newTask: Task = { id: crypto.randomUUID(), title, completed: false };
    tasks.push(newTask);
    return newTask;
  },
  deleteTask: (id: string) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      return true;
    }
    return false;
  },
};