import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      
      <div className="md:w-10/12 mx-auto ">
      <Playground endpoint='https://bucket-list-api.hasura.app/v1/graphql' />

      </div>

    </Provider>
  </React.StrictMode>,
  rootElement
)