import express, { Router } from 'express';


import { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';

const route = express.Router();


route.post('/api/todos', addTodo)
route.get('/api/todos', getAllTodos);
route.get('/api/todos/:id', toggleTodoDone);
route.put('/api/todos/:id', updateTodo);
route.delete('/api/todos/:id', deleteTodo);


export default route;
