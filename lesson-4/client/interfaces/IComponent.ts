import { IAttribute } from './IAttribute';
import { IEvent } from './IEvent';

export interface IComponent {
    tagName?: string;
    textContent?: string;
    id?: string;
    className?: string;
    events?: IEvent;
    children?: IComponent[];
    attrs?: IAttribute;
    innerHTML?: string;
}
