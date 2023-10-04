import { AppAction, AppState } from './types';

const initialState: AppState = {
  tasks: [],
};

const rootReducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'UPDATE_TASK':
        return {
            ...state,
            tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
            ),
        };      
    default:
      return state;
  }
};

export default rootReducer;
