import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.ts'
import { BrowserRouter } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SkeletonTheme baseColor='#e2e5e7' highlightColor='#fff'>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SkeletonTheme>
    </Provider>
  </React.StrictMode>
)
