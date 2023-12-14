import React, {useState, useEffect} from 'react'

const Hooks = () => {
    let [title,setTitle] = useState("some text");
    const onch = e=>{
        setTitle(e.target.value)
    }
    useEffect(()=>{
        console.log("Effect applied "+title)
    })
    return(
        <div>
            <input type="text" onChange={onch}></input>
        </div>
    )
};

export default Hooks
