import './style.css';

import { Application } from './app';

import { render } from '../core';
import { toHTML } from '../utils';

const root = document.body as HTMLElement;

render(root, toHTML(Application) as HTMLElement);
