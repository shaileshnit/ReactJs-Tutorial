import React from 'react';
import data from './data';
import Card from './Card';
import './App.css';

function App()
{

  return (
    <div className='app'>
      <h1 className='app__head'> List of Netflix Series</h1>
      {
        data.map((val) =>
        {
          return (
            /* Calling functional component within map */
            <Card
              key={val.id}
              name={val.name}
              imgsrc={val.imgsrc}
              title={val.title}
              link={val.link}
            />
          );
        })
      }
    </div>
  );
}

export default App;