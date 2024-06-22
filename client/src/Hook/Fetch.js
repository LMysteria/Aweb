const [data, setData] = React.useState("");

const getfetch = async () => {
  const res = await fetch(`http://localhost:3001/api`,{
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