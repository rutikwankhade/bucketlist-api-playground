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

      <div className="p-20 flex flex-col justify-center items-center">
        <h2 className="md:text-3xl text-xl font-semibold">Buck List Ideas </h2>
        <h1 className="md:text-5xl text-3xl font-bold">API Playground</h1>
      </div>

      <div className="md:w-10/12 mx-auto shadow-xl">

        <Playground endpoint='https://bucket-list-api.hasura.app/v1/graphql' />

      </div>
      <App />


    </Provider>
  </React.StrictMode>,
  rootElement
)