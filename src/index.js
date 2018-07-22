import React from 'react'
import { render } from 'react-dom'
import { translate, I18nextProvider } from 'react-i18next'

import i18nextInstance from './i18nInstance'

const App = translate()(({ t }) => {
  return (
    <div>
      <h1>DEMO CHANGE THE LANGUAGES FROM GOOGLE SHEET</h1>
      <table>
        <tbody>
          <tr>
            <td>Available Language: </td>
            <td>
              <select onChange={(e) => i18nextInstance.changeLanguage(e.target.value) } value='en'>
                <option value='en'>English</option>
                <option value='th'>ไทย</option>
                <option value='jp'>Japanese</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <h1>Afftected Content</h1>
              <div style={{ border: '2px solid #000', height: 0, width: '100%' }}></div>
              <div>
                {t('eapp.section.title')}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
})

render(
<I18nextProvider i18n={i18nextInstance}>
    <App / >
  </I18nextProvider>
  , document.getElementById('app'))
