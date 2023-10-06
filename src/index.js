import './styles.css';
import { loadImages } from './imageloader';
import { createTodo } from './itemcreation';
import { createProject } from './projectcreation';
import { storageContainers } from './storage';

loadImages();

createProject();

storageContainers.displayContainers();
