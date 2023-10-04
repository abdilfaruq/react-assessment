import { Task } from './types';

export const addTask = (task: Task) => ({
  type: 'ADD_TASK' as const,
  payload: task,
});

export const toggleTask = (taskId: number) => ({
  type: 'TOGGLE_TASK' as const,
  payload: taskId,
});

export const deleteTask = (taskId: number) => ({
  type: 'DELETE_TASK' as const,
  payload: taskId,
});

export const updateTask = (task: Task) => ({
    type: 'UPDATE_TASK' as const,
    payload: task,
  });
  