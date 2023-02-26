import React, { FC, useState } from 'react';
import { AddPizzaForm } from './components/AddPizzaForm';
import Pizza from './models/Pizza';
import './App.css';
import DisplayPizzas from './components/DisplayPizzas';





const App: FC = () => 
{

  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) =>
{
  setPizzaList([...pizzaList, newPizza]);
}

  return (
    <div className="App">
          <div className="wrap">
            <span className='heading'>Pizza</span>
            <AddPizzaForm 
            addPizza={addPizza}
            />

            <DisplayPizzas
              pizzaList={pizzaList}
            />
    </div>
    </div>

  );
}

export default App;
