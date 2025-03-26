"use server";

import { TaskModel } from "@/models/task";

// Fetch all tasks
export async function getTasks() {
  return TaskModel.getAll();
}

// Add a new task
export async function createTask(title: string) {
  return TaskModel.addTask(title);
}

// Delete a task
export async function deleteTask(id: string) {
  return TaskModel.deleteTask(id);
}