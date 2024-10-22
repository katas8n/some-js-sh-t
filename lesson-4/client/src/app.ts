import { App } from '../components/App';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Main } from '../components/Main';

import { req } from '../utils';

const form = new Form({
    children: [
        new Input({
            events: {
                keydown: e => {
                    console.log(e);
                }
            }
        }),
        new Input({}),
        new Button({
            textContent: 'Send',
            events: {
                click: e => {
                    console.log('!');
                    e.preventDefault();
                    req('http://localhost:4000/users', { method: 'GET' });
                }
            }
        })
    ]
});

const header = new Header({
    innerHTML: `
        <h1 class="header-text">Some shit!</h1>
    `,
    events: {
        click: () => {
            console.log('Here we are [header]!');
        }
    }
});

const footer = new Footer({
    innerHTML: `
        <h1 class="footer-text">All rights reserved (c) 2023</h1>
    `
});

const main = new Main({
    children: [form],
    innerHTML: `
        <h1 class="main-text">There is nothoing herre yet!</h1>
    `
});

const Application = new App({
    children: [header, main, footer]
});

export { Application };
