"use client";

import { Task } from "@/models/task";
import { useTransition } from "react";
import { deleteTask } from "@/controllers/taskController";

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    startTransition(async () => {
      await deleteTask(id);
      window.location.reload(); // Refresh UI after deleting task
    });
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ display: "flex", gap: "10px" }} className="my-2">
          <span className="text-2xl">{task.title} {task.completed ? "✅" : ""}</span>
          <button disabled={isPending} onClick={() => handleDelete(task.id)}>
            {isPending ? "Deleting..." : "❌"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;