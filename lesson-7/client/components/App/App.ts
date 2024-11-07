import { Component } from '../../core/Component';
import { IComponent } from '../../interfaces';

export class App extends Component {
    constructor(obj: IComponent) {
        super(obj);
        this.tagName = 'app-root';
        this.className = ['app', obj.className].join(' ');
        this.id = 'app-root';
    }
}
