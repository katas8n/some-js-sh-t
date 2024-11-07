import { Component } from '../../core/Component';
import { IComponent } from '../../interfaces';

export class Main extends Component {
    constructor(obj: IComponent) {
        super(obj);
        this.tagName = 'main';
        this.className = ['main', obj.className].join(' ');
    }
}
