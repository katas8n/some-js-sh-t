import dotenv from 'dotenv';

dotenv.config();

const greeting = () => {
    console.log(process.env.PORT);
    console.log('Hello!');
};

greeting();
