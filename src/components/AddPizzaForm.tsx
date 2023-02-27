import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import Pizza from "../models/Pizza";
import './styles.css';

interface AddPizzaFormProps 
{
    addPizza: (newPizza: Pizza) => void;
}


const initState = 
{
    title: '',
    price: '',
    img: ''
}


    const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) =>
{
    const[newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState)


    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    {
        const {name, value} = e.target;

        setNewPizza({...newPizza, [name]: value})
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();

        const{ title, price, img } = newPizza;
        if(title && price && img)
        {
            addPizza({title, img, price: Number(price), id: Date.now()})
            setNewPizza(initState);
        }
    }






    return(
        <form onSubmit={handleSumbit}>
                <input 
            name="title"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={newPizza.title}
                />

                <input 
            name="price"
            type="text"
            placeholder="Price"
            onChange={handleChange}
            value={newPizza.price}
                />

                <input 
            name="img"
            type="text"
            placeholder="Picture"
            onChange={handleChange}
            value={newPizza.img}
                />

                <button type="submit">
                + Add to menu
                </button>
        </form>
    )

}

export default AddPizzaForm;