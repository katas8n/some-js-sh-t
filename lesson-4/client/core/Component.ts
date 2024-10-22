import { IAttribute, IComponent, IEvent } from '../interfaces';

export abstract class Component {
    tagName?: string;
    textContent?: string;
    id?: string;
    className?: string;
    events?: IEvent;
    children?: IComponent[];
    attrs?: IAttribute;
    innerHTML?: string;

    constructor(obj: IComponent) {
        this.tagName = obj.tagName;
        this.textContent = obj.textContent;
        this.className = obj.className;
        this.id = obj.id;
        this.events = obj.events;
        this.children = obj.children;
        this.attrs = obj.attrs;
        this.innerHTML = obj.innerHTML;
    }
}
