import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, Task } from '../store/types';
import { addTask, toggleTask, deleteTask, updateTask } from '../store/actions';
import {
  Box,
  Heading,
  Input,
  Button,
  List,
  ListItem,
  Checkbox,
  IconButton,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import {
  DeleteIcon,
  EditIcon,
  CheckIcon,
  CloseIcon,
  SearchIcon,
} from '@chakra-ui/icons';

function ToDoList() {
  const [taskName, setTaskName] = useState('');
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state: AppState) => state.tasks);

  let latestId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;

  const addNewTask = () => {
    if (taskName.trim() !== '') {
      latestId++;
      const newTask: Task = { id: latestId, name: taskName, completed: false };
      dispatch(addTask(newTask));
      setTaskName('');
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    dispatch(toggleTask(taskId));
  };

  const removeTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const startEditing = (taskId: number) => {
    setEditTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
    }
  };

  const cancelEditing = () => {
    setEditTaskId(null);
    setTaskName('');
  };

  const saveEditing = (taskId: number) => {
    const updatedTask: Task = { id: taskId, name: taskName, completed: false };
    dispatch(updateTask(updatedTask));
    setEditTaskId(null);
    setTaskName('');
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box minH="50vh" p={4}>
      <Heading as="h1" mb={4}>
        To-do List
      </Heading>
      <Flex mb={4}>
        <Input
          type="text"
          placeholder="Search tasks"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IconButton
          icon={<SearchIcon />}
          colorScheme="teal"
          aria-label="Search"
        />
      </Flex>
      <Flex mb={4}>
        <Input
          type="text"
          placeholder="New task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Spacer />
        <Button colorScheme="teal" onClick={addNewTask}>
          Add
        </Button>
      </Flex>
      <List spacing={3}>
        {filteredTasks.map((task) => (
          <ListItem key={task.id} display="flex" alignItems="center">
            {editTaskId === task.id ? (
              <>
                <Input
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <IconButton
                  icon={<CheckIcon />}
                  colorScheme="teal"
                  aria-label="Save"
                  onClick={() => saveEditing(task.id)}
                />
                <IconButton
                  icon={<CloseIcon />}
                  colorScheme="red"
                  aria-label="Cancel"
                  onClick={cancelEditing}
                />
              </>
            ) : (
              <>
                <Checkbox
                  isChecked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  size="lg"
                  colorScheme="teal"
                >
                  {task.name}
                </Checkbox>
                <Spacer />
                <IconButton
                  icon={<EditIcon />}
                  colorScheme="blue"
                  aria-label="Edit Task"
                  onClick={() => startEditing(task.id)}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  aria-label="Delete Task"
                  onClick={() => removeTask(task.id)}
                />
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ToDoList;
