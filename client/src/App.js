import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {

  const [data, setData] = React.useState("");

  const getfetch = async () => {
    const res = await fetch(`http://192.168.1.5:3001/api`,{
      method: "get",
    })
    if(!res.ok){
      throw new Error(`Http error ${res.status}`);
    }
    const fdata = await res.json()
    console.log(fdata);
    setData(fdata.message);
  }

  React.useEffect(()=>{
    try {
      getfetch();
    } catch (error) {
      console.error(error);
    }

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data?"Loading...":data}
        </p>
      </header>
    </div>
  );
}

export default App;
