import { Component } from '../../core/Component';
import { IComponent } from '../../interfaces';

export class Input extends Component {
    constructor(obj: IComponent) {
        super(obj);
        this.tagName = 'input';
        this.className = ['input'].join(' ');
    }
}
