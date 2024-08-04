
function Keypad({handleClick , handleClear , calculate , handleBackspace }){
    return(
        <>
            <div className='keypad'>
                <div className="row4">
                        <button className="fun-key" onClick={() => {handleClear()}} style={{bordertop:"none"}}>C</button>
                        <button className="fun-key" onClick={()=>{handleBackspace()}} style={{ borderRight: "none" }}>⬅</button>
                </div>
                
                <div className="row">
                    <button className="operator" onClick={()=>{handleClick("+")}}>+</button>
                    <button className="operator" onClick={()=>{handleClick("-")}}>-</button>
                    <button className="operator" onClick={()=>{handleClick("*")}}>*</button>
                    <button className="operator" onClick={()=>{handleClick("/")}}  style={{borderRight:"none"}} >/</button>

                </div>
                <div className="row1">
                    <button className="number" onClick={()=>{handleClick("7")}}>7</button>
                    <button className="number" onClick={()=>{handleClick("8")}}>8</button>
                    <button className="number" onClick={()=>{handleClick("9")}} style={{borderRight:"none"}}>9</button>

                </div>
                <div className="row1">
                    <button className="number" onClick={()=>{handleClick("4")}}>4</button>
                    <button className="number" onClick={()=>{handleClick("5")}}>5</button>
                    <button className="number" onClick={()=>{handleClick("6")}} style={{borderRight:"none"}}>6</button>

                </div>
                <div className="row1">
                    <button className="number" onClick={()=>{handleClick("1")}}>1</button>
                    <button className="number" onClick={()=>{handleClick("2")}}>2</button>
                    <button className="number" onClick={()=>{handleClick("3")}} style={{borderRight:"none"}}>3</button>

                </div>
                <div className="row1">
                    <button className="number" onClick={()=>{handleClick(".")}}>.</button>
                    <button className="number" onClick={()=>{handleClick("0")}}>0</button>
                    <button className="fun-key"onClick={()=>{calculate()}}style={{borderRight:"none"}}>=</button>

                </div>
            </div>
        </>
    )
}
export default Keypad


