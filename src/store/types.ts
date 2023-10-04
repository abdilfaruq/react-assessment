export interface Task {
    id: number;
    name: string;
    completed: boolean;
  }
  
  export interface AppState {
    tasks: Task[];
  }
  
  export type AppAction =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'TOGGLE_TASK'; payload: number }
    | { type: 'DELETE_TASK'; payload: number }
    | { type: 'UPDATE_TASK'; payload: Task };
  