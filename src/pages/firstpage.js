import React from "react";

const Firstpage = () => {


        const shoot = (a, b) => {
            alert(typeof(a));
            alert(b.type);
        }

    const x = 5;
    const myElement = <h2>{x < 10? "Hello" : "Good Bye"}</h2>
    return (
        <div className="hello">
            {myElement}
            <button onClick={(event) => shoot('event', event)}>take the shoot</button>
        </div>
    );

};

export default Firstpage;

