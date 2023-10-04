import './styles.css';
import { loadImages } from './imageloader';
import { createTodo } from './itemcreation';

const todoContainer = [];

loadImages();

todoContainer.push(createTodo());

console.log(todoContainer);
