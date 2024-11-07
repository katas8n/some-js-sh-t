import { Component } from '../../core/Component';
import { IComponent } from '../../interfaces';

export class Footer extends Component {
    constructor(obj: IComponent) {
        super(obj);
        this.tagName = 'footer';
        this.className = ['footer', obj.className].join(' ');
    }
}
