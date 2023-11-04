import { useEffect, useState } from "react"

const Input =({setType})=>{

    const [search, setSearch]= useState('')



   const submitHandler= (e)=>{
    e.preventDefault()
    setType(search)
    setSearch('')
   }

//    const searchHandler=(e)=>{
//     setSearch(e.target.value)
//    }



    return <div className="App">
        <form className="search-form" onSubmit={(e)=>submitHandler(e)}>
            <input type="text" className="search-bar" value={search} onChange={e=> setSearch(e.target.value)}/>
            <input type="submit" className="search-button" value="Search"/>
        </form>
    </div>
}

export default Input