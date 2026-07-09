import react, { useState } from 'react'
function App() {
  const [Countnumber, setCountnumber] = useState(0)
  const handleIncrement = () => {
    setCountnumber(Countnumber + 1)
  }
  const handleDecrement = () => {
    setCountnumber(Countnumber - 1)
  }

  const [like, setLike] = useState(false)
  const handleLikeActive = () =>{
    setLike(!like)
  }


  const [pwd, setPwd] = useState(""); 
  const [showPassword, setshowPassword] = useState(false);
  const handleChangePwd = (e) => {
    setPwd(e.target.value)
  }
  const handlePasword = () => {
    setshowPassword(!showPassword)
  }
  return (
    <>
      <div style={{marginBottom: "15px"}}>
        
        <button onClick={handleDecrement} disabled = {Countnumber === 0}>Decrement</button>&nbsp;&nbsp;&nbsp;
        {Countnumber} &nbsp;&nbsp;&nbsp;
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <div style={{marginBottom: "15px"}}>
          <span>{!like ? "0" : "1"}</span>&nbsp;&nbsp;&nbsp;
          <button onClick={handleLikeActive} style={{color: !like ? "black" : "orange" }}>Like</button>
      </div>

      <div>
        <input type={showPassword ? "text" : "password"} 
          value={pwd} 
          placeholder="Enter Password"
          onChange={handleChangePwd}
        />
        <div style={{fontSize: `${Countnumber ? "10" : "1`${Countnumber}`"}px`}}>Siva</div>
        <div>length: {pwd.length}</div>
        <div>Words: {pwd === "" ? "0" : pwd.trim().split(/\s/).length}</div>
        <button onClick={handlePasword}>{!showPassword ? "show" : "hide"}</button>

      </div>

      <div>

      </div>
    </>
  )
}

export default App
