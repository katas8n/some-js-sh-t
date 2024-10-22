import { Component } from '../../core/Component';
import { IComponent } from '../../interfaces';

export class Form extends Component {
    constructor(obj: IComponent) {
        super(obj);
        this.tagName = 'form';
        this.className = ['form'].join(' ');
        this.events = {
            submit: (e: Event) => {
                e.preventDefault();
            }
        };
    }
}
