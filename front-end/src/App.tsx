import React from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents';
const data = [
  {
    id: '1',
    name: 'Title1',
    children: [
      {
        id: '1.1',
        name: 'Sub-1'
      },
      {
        id: '1.2',
        name: 'Sub-2',
        children: [
          {
            id: '1.2.1',
            name: 'Sub!'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Title2'
  }
]

function App() {
  return (
    <TableOfContents
      sections={data}
    />
  );
}

export default App;
