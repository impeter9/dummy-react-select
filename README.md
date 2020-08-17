# dummy-react-select

## Motivation

Create a custom select module.

## Result

## Usage

Clone the repository on your local machine.

Inside the root directory of the cloned repository,

```sh
pwd
```

This will give you the path of your current working directory,

```sh
/Users/username/Documents/dummy-react-select
```

In your project, install the component using the path from the previous step,

```sh
yarn add /Users/username/Documents/dummy-react-select
```

Import the component and pass in an array, or an object, to display dummy-react-select component.

```sh
import React from 'react';
import './App.css';

import DummyComponent from 'dummy-react-select';

const dummyOptionsArr = ['Chocolate', 'Strawberry', 'Vanilla'];

function App() {
  return (
    <div className='App'>
      <DummyComponent option={dummyOptionsArr} />
    </div>
  );
}

export default App;
```
