import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import "./App.css"

export default function App(props) {
  const [isShowing, setIsShowing] = useState(true);

  const handleClick = () => {
      setIsShowing(!isShowing)
  }
    
  return (
    <div>
      <center>
        <h2>Hi this is react</h2>
          <Button onClick={handleClick} variant="contained" color="primary">Primary</Button><br />
          {isShowing ? 
          <img className="image" src="https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> : null}
      </center>
    </div>
  )
}