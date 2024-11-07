import { Component } from '../../core/Component';
import { IComponent } from '../../interfaces';

export class Nav extends Component {
    constructor(obj: IComponent) {
        super(obj);
        this.tagName = 'nav';
        this.className = ['nav', obj.className].join(' ');
    }
}
