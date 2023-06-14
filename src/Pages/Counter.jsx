// import { useContext } from "react"
// import { ContextLanguage } from "../Context/Languages"
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter , incrementValue , decrementCounter} from "../store/slices/counter";
export default function Counter() {

    const counter = useSelector((state) => 
    state.counter.counter_value) // useSelestor used to read value 

    const update = useDispatch() // useDispatch used to update value

    // const {Lang, setLang} = useContext(ContextLanguage);
    // const dispatch = useDispatch();
    return(
        <>
        <div style={{height:'100vh'}}>
            {/* <div className="text-center text-light">
                <h3 >Context Language</h3>
                <h5 className='m-5'> Current language : <span className="text-uppercase text-danger">{Lang}</span> </h5>
                <button className="btn btn-warning" onClick={()=>{
                    setLang (Lang === 'ar' ? 'en' : 'ar')
                }}>{Lang}</button>
            </div> */}
    
            <h3 className="text-center text-light ">Context Language</h3>
            <h3 className="text-center text-light mt-5">Counter : <span style={{color:'red'}}>{counter}</span></h3>
            <div className="text-center mt-4 ">
            <button className="btn btn-primary mx-3" onClick={() => update(incrementCounter())}>Increment</button>
            <button className="btn btn-info mx-3" onClick={() => update(decrementCounter())}>Decrement</button>
            <button className="btn btn-success" onClick={() => update(incrementValue(2))}>Add Number</button>


            </div>
        </div>
        
        
        </>
    )
} 