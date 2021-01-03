import { hello } from './hello';
import './styles/main.scss';

document.querySelector('h1').textContent = hello('How are you?');