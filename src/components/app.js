import React from 'react';
import Table from './table';

const students = [
    {
        name: 'dkfh kdfhjdf',
        course: 'dkfhdjfh',
        grade: 88
    },
    {
        name: 'dkfh kdfhjdf',
        course: 'dkfhdjfh',
        grade: 88
    },
    {
        name: 'dkfh kdfhjdf',
        course: 'dkfhdjfh',
        grade: 88
    }
];

function App() {
    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data = {students} />
        </div>
    );
}

export default App;