import React, { Component } from 'react';
import Main from './components/MainComponent.js'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from './redux/configureStore.js'
import { Provider } from 'react-redux'

const store = configureStore()

class App extends Component {
  render(){
  return (
	  <Provider store={store}>
		<BrowserRouter >
			<div className="App">
				  <Main />
			</div>
		 </BrowserRouter>
	  </Provider>	  
  )}
}

export default App;
