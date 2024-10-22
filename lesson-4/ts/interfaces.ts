interface Person {
    name: string;
    surname: string;
    hasWallet?: boolean;
}

function transformPersonsData(person: Person): Person {
    const obj = {
        name: 'John',
        surname: 'Doe'
    };

    return obj;
}
