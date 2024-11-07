import { App } from '../components/App';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Main } from '../components/Main';
import { Nav } from '../components/Nav';
import { render } from '../core';

import { toHTML } from '../utils';

const serverLoginData = {
    login: '',
    password: ''
};

const form = new Form({
    children: [
        new Input({
            events: {
                keydown: e => {
                    serverLoginData.login += e.target.value;
                }
            }
        }),
        new Input({
            events: {
                keydown: e => {
                    serverLoginData.password += e.target.value;
                }
            }
        }),
        new Button({
            textContent: 'Send',
            events: {
                click: async e => {
                    console.log(serverLoginData.login);
                    console.log(serverLoginData.password);

                    e.preventDefault();
                    const response = await fetch(
                        'http://localhost:4000/users',
                        {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: serverLoginData.login,
                                password: serverLoginData.password
                            })
                        }
                    );

                    const data = await response.json();

                    console.log(data);
                }
            }
        })
    ]
});

const componentns = [
    {
        name: 'Home',
        component: new Main({
            textContent: 'There is a home page.'
        })
    },
    {
        name: 'Categories',
        component: new Main({
            children: [form]
        })
    },
    {
        name: 'Login',
        component: new Main({
            textContent: 'There is a login page.'
        })
    }
];

let currentComponent = componentns[0];

const nav = new Nav({
    children: [
        new Button({
            textContent: 'home',
            className: '--header-btn',
            events: {
                click: e => {
                    console.log(e.target.textContent);

                    render(
                        document.querySelector('.main '),
                        toHTML(currentComponent.component)
                    );
                }
            }
        }),
        new Button({
            textContent: 'login',
            className: '--header-btn',
            events: {
                click: () => {
                    render(
                        document.querySelector('.main '),
                        toHTML(componentns[1].component)
                    );
                }
            }
        }),
        new Button({
            textContent: 'categories',
            className: '--header-btn',
            events: {
                click: () => {
                    render(
                        document.querySelector('.main '),
                        toHTML(componentns[2].component)
                    );
                }
            }
        })
    ]
});

const header = new Header({
    innerHTML: `
        <h1 class="header-text">Some shit!</h1>
    `,
    children: [nav],
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

const main = new Main({});

const Application = new App({
    children: [header, main, footer]
});

export { Application };
