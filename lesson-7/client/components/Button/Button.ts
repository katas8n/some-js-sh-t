import { Component } from '../../core/Component';
import { IComponent } from '../../interfaces';

export class Button extends Component {
    constructor(obj: IComponent) {
        super(obj);
        this.tagName = 'button';
        this.className = ['button'].join(' ');
    }
}
