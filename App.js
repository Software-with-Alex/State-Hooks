import React, {useState} from "react"
import Styles from "./styles.css"






const App = () => {
    const [counter, setCounter] = useState(0);
    
    return (

                    
        <div className="app-div">
            <h1>This is an example using State</h1>
            <h1 className="header-1">This is the current count:{counter}</h1><br></br>
            <button className="buttons" onClick={() => setCounter(counter == 0)}> Reset Count</button><br></br>
            <button className="buttons" onClick={() => counter >= 5 ? "" : setCounter(counter + 1)}>Increase Count</button><br></br>
            <button className="buttons" onClick={() => counter <= 0 ? " " :setCounter(counter - 1)}>Decrease Count</button><br></br>
            <button className="buttons" onClick={() => alert("hi")}>Click for error message</button>
        </div>


    );
};



export default App;