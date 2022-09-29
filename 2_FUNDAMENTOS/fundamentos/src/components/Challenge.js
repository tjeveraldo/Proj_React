import React from 'react'

const Challenge = () => {
    const a = 21
    const b = 30

  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => console.log(a + b)}>Clique aqui para somar!</button>
    </div>
  )
}

export default Challenge

// const Challenge = () => {
//     var a = 21;

//     var b = 30;

//     const handleAdd = () => {

//     console.log(a + b)}

//     return(
//     <div>
//         <h3>{a} + {b}</h3>
//         <div><button onClick={handleAdd}> Clique para somar! </button></div>
//     </div>
//     )
// }
// export default Challenge