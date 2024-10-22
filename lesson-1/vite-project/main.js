import './style.css';

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    fetch('http://www.localhost:4000').then(
        res => {
            console.log('[res.json()]', res.json());
        },
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
});
