import axios from "axios";
import { toast } from 'react-toastify';
const apiUrl = "http://localhost:8000/api/tasks";


const getAllTodoTasks = async () => {
  try {
    const result = await axios.get(apiUrl);
    return result.data.data;
  } catch (err) {
    toast.error("Something went wrong!");
  }
};

const addTodoTask = async (data) => {
  try {
    const result = await axios.post(apiUrl, data);
    return result;
  } catch (err) {
    toast.error("Something went wrong!");
  }
};

const updateTodoTask = async (id, task) => {
  try {
    const result = await axios.put(apiUrl + "/" + id, task);
    return result;
  } catch (err) {
    toast.error("Something went wrong!");
  }
};

const deleteTodoTask = async (id) => {
  try {
    const result = await axios.delete(apiUrl + "/" + id);
    return result;
  } catch (err) {
    toast.error("Something went wrong!");
  }
};

export { getAllTodoTasks, addTodoTask, updateTodoTask, deleteTodoTask };
