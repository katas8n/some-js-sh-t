import { Component } from '../core/Component';

export function toHTML(obj: Component): HTMLElement | undefined {
    if (!obj.tagName) return;

    const element = document.createElement(obj.tagName);
    obj.className && (element.className = obj.className);
    obj.id && (element.id = obj.id);
    obj.textContent && (element.textContent = obj.textContent);

    obj.attrs &&
        Object.entries(obj.attrs).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });

    obj.events &&
        Object.entries(obj.events).forEach(([key, value]) => {
            console.log(key);
            console.log(value);
            console.log('---------------');
            console.log(element);
            element.addEventListener(key, value);
        });

    obj.children &&
        obj.children.forEach(child => {
            const component = new Component(child);
            element.appendChild(toHTML(component) as HTMLElement);
        });

    obj.innerHTML && (element.innerHTML += obj.innerHTML);
    return element;
}
