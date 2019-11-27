import React from 'react';
import './App.css';
import 'tachyons';
function App() {
  return (
    <div className="App bg-red">
      	<article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 grow">
		  	<div className="tc">
		    	<img src="https://robohash.org/1" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" alt='Cat'></img>
		    	<h1 className="f3 mb2">Robored W.</h1>
		    	<h2 className="f5 fw4 gray mt0">CRO (Chief Rob Officer)</h2>
		  </div>
		</article>
    </div>
  );
}

export default App;
