import React, {FC} from "react";
import Pizza from "../models/Pizza";

interface DisplayPizzaProps
{
    pizzaList: Pizza[];
}

const DisplayPizzas: FC<DisplayPizzaProps> = ({pizzaList}) =>
{
    return(
        <div className="container">
            {pizzaList.map((pizza) =>
            {
            return pizza.title;
            })}
        </div>
    )
}

export default DisplayPizzas;