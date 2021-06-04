import React, { useState } from 'react';
import './css/App.css';
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import { Route,Switch, useHistory} from "react-router-dom"
import SpeechRecognition from 'react-speech-recognition';

function App() {
  var history=useHistory()
  const [reDirectUrl, setreDirectUrl] = useState("")

  const commands=[{
    command:["Go to *","Open *"],
    callback:(redirectPage)=>{
   
     return setreDirectUrl(redirectPage)},
  },];
console.log(commands);
  const pages=["home","about","contact","service"]
 

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null
  }

  var redirect=""

  if (reDirectUrl) {
    if (pages.includes(reDirectUrl)) {
      history.push(reDirectUrl)
    }
    else{
      redirect= <p>Sorry No Page With name {reDirectUrl}</p>

    }
  }

  return (
   <>
<Navbar />
<p className="m-2"><small>Click To This Button And Say Open then Page name <br />eg : Open Contact..</small></p>

<button type="button" class="btn btn-primary m-2" onClick={SpeechRecognition.startListening}>Start </button>
<Switch>
  <Route exact path="/" component={Home} />
  <Route  path="/home" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route  path="/service" component={Service} />
  {redirect}
</Switch>

   </>
  );
}

export default App;
