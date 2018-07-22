import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>DEMO CHANGE THE LANGUAGES FROM GOOGLE SHEET</h1>
        <table>
          <tr>
            <td>Available Language: </td>
            <td>
              <select>
                <option>ไทย</option>
                <option>English</option>
                <option>Japanese</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <h1>Afftected Content</h1>
              <div style={{ border: '2px solid #000', height: 0, width: '100%' }}></div>
              <div>
                fpp
              </div>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
