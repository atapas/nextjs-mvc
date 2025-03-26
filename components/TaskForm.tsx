"use client";

import { useState, useTransition } from "react";
import { createTask } from "@/controllers/taskController";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      await createTask(title);
      window.location.reload(); // Refresh UI after adding task
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a New Task"
        className="border rounded p-1 mx-2"
      />
      <button 
        type="submit" 
        disabled={isPending}
        className="bg-black text-white p-2 rounded-xl">
        {isPending ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;