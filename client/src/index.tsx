import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { Global, css } from '@emotion/react'
import { Provider } from 'react-redux'
import { setupStore } from './redux/store'

import './index.css'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }
      `}
    />
    <App />
  </Provider>,
)
