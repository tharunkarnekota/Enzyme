import React,{useState} from 'react'

const App = (props) => {
  const [data,setData]=useState(0);
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Tharun karnekota</h2>
      <div id="welcome">
        Welcome {props.name}
      </div>
      <div id="dataa">count is {data}</div>
      <button onClick={() => setData(data+1)}></button>
    </div>
  )
}

export default App
