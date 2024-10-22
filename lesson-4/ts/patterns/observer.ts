interface Observer {
    update(data: any): void;
}

class Observer implements Observer {
    update(data: any): void {
        console.log(data);
    }
}

class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    notifyAll(news: string) {
        this.observers.forEach(observer => observer.update(news));
    }
}

const subj = new Subject();

const obs1 = new Observer();
const obs2 = new Observer();

subj.addObserver(obs1);
subj.addObserver(obs2);

subj.notifyAll('News!');
