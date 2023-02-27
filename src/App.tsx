import React, {FC, useState} from "react";
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizza';
import './App.css';

const App: FC = () =>
{
  const [PizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) =>
  {
    setPizzasList([...PizzasList, newPizza])
  }


  return(
    <div className="App">
      <div className="wrap">
        <span className="heading">Pizzeria</span>
        <AddPizzaForm
        addPizza ={addPizza}
        />
      </div>
    </div>
  )
}

export default App;