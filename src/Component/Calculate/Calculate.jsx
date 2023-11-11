import { useState } from 'react';
import './Calculate.css'

const Calculate = () => {

    const [result, setResult] = useState("");

    const inputChange = (e) => {
        setResult(result.concat(e.target.value));
    }
    const cancel = () => {
        setResult("");
    }
    const clr = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const equal = () => {
        try{
            setResult(eval(result).toString());

        }
        catch(err){
            setResult("error")
        }
    }

    return (

        <div class="calcu">
            <form>
                <input class="result" type="text" value={result} />
            </form>

            <div>

                <button class="btn bg-info" type="button" onClick={clr}>C</button>
                <button class="btn bg-info" type="button" onClick={cancel}>delet</button>
                <button class="btn bg-info" type="button" value="/" onClick={inputChange}>/</button>
                <button class="btn bg-info" type="button" value="*" onClick={inputChange}>*</button>
            </div>
            <div>
                <button class="btn bg-primary" type="button" value="7" onClick={inputChange}>7</button>
                <button class="btn bg-primary" type="button" value="8" onClick={inputChange}>8</button>
                <button class="btn bg-primary" type="button" value="9" onClick={inputChange}>9</button>
                <button class="btn bg-info" type="button" value="-" onClick={inputChange}>-</button>
            </div>
            <div>
                <button class="btn bg-primary" type="button" value="4" onClick={inputChange}>4</button>
                <button class="btn bg-primary" type="button" value="5" onClick={inputChange}>5</button>
                <button class="btn bg-primary" type="button" value="6" onClick={inputChange}>6</button>
                <button class="btn bg-info" type="button" value="+" onClick={inputChange}>+</button>
            </div>
            <div class="d-flex under">
                <div class="part1">
                    <div>
                        <button class="btn1 bg-primary" type="button" value="1" onClick={inputChange}>1</button>
                        <button class="btn1 bg-primary" type="button" value="2" onClick={inputChange}>2</button>
                        <button class="btn1 bg-primary" type="button" value="3" onClick={inputChange}>3</button>
                    </div>
                    <div>
                        <button class="btn2 bg-primary" type="button" value="0" onClick={inputChange}>0</button>
                        <button class="btn3 bg-primary" type="button" value="." onClick={inputChange}>.</button>
                    </div>
                </div>
                <div class="part2">
                    <button class="btn4 bg-warning" type="button" onClick={equal}>=</button>

                </div>
            </div>
        </div>


    )
}

export default Calculate