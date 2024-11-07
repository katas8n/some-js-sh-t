import { Component } from '../../core/Component';
import { IComponent } from '../../interfaces';

export class Header extends Component {
    constructor(obj: IComponent) {
        super(obj);
        this.tagName = 'header';
        this.className = ['header', obj.className].join(' ');
    }
}
