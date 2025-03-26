import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import { getTasks } from "@/controllers/taskController";

export default async function Home() {
  const tasks = await getTasks(); // Directly call server function

  return (
    <main className="flex flex-col m-4 items-center bg-gray-300 w-1/3 rounded-md p-3">
      <h1 className="text-3xl my-3">Task Manager</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </main>
  );
}