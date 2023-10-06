import './styles.css';
import { loadImages } from './imageloader';
import { createTodo } from './itemcreation';
import { storageContainers } from './storage';

loadImages();

createTodo();

storageContainers.displayTodoContainer();
