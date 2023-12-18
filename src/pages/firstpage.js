import React from "react";
import { useState } from "react";

const Firstpage = () => {


    const shoot = (a, b) => {
        alert(typeof (a));
        alert(b.type);
    }

    // conditional rendering.
    const MissedGoal = () => {
        return <h2>missed Goal</h2>
    }
    const MadeGoal = () => {
        return <h2>Goal!</h2>
    }

    const Goal = (props) => {
        const isGoal = props.isGoal;
        if (isGoal) {
            return <MadeGoal />
        }
        return <MissedGoal />
    }
    // react lists with keys

    const Car = (props) => {
        return <div>I am a {props.brand}</div>
    }

    const Garage = () => {
        const cars = [{ id: 1, brand: 'ford' },
        { id: 2, brand: 'venz' },
        { id: 3, brand: 'audi' },
        { id: 4, brand: 'toyoda' }];
        return (
            <>
                <h3>
                    {cars.map((car) => <Car key={car._id} brand={car.brand} />)}
                </h3>
            </>
        )
    }
    //React Forms && useState
    const MyForm = () => {

        const [inputs, setInputs] = useState({});
        const [selected, setSelected] = useState('Venz')

        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`name: ${inputs.name} \n  age: ${inputs.age}`);
        }

        const handleChange = (e) => {
            setSelected(e.target.value);
        }
        return (
            <form onSubmit={handleSubmit}>
                <label>enter you name
                    <input type="text" value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })}></input>
                </label>
                <label>enter you age
                    <input type="number" value={inputs.age} onChange={(e) => setInputs({ ...inputs, age: e.target.value })}></input>
                </label>
                <input type="submit"></input>
                <select  onChange={handleChange}>
                    <option value="Ford">Ford-1</option>
                    <option value="Audi">Audi-1</option>
                    <option value="Venz">Venz-1</option>
                </select>
            </form>
        )

    }

    const x = 5;
    const myElement = <h2>{x < 10 ? "Hello" : "Good Bye"}</h2>
    return (
        <div className="hello">
            <Goal />
            {myElement}
            <button onClick={(event) => shoot('event', event)}>take the shoot</button>
            <Garage />
            <MyForm />
        </div>
    );

};

export default Firstpage;

