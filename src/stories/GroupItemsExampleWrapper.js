import React, { Component } from 'react'
import ListWithAnimation from './../examples/GroupItemsExample'
import generateItems from './generateItems'

const groups = ['all', 'color', 'shape', 'even/odd']

class App extends Component {
  state = {
    items: generateItems(),
    group: 'all'
  }
  render() {
    const { items, group } = this.state
    let groupedItems = {}
    items.forEach(item => {
      if (groupedItems[item[group]]) groupedItems[item[group]].push(item)
      else groupedItems[item[group]] = [item]
    })
    return (
      <div className="App">
          <div className="m-3">
            <fieldset
              onChange={e => {
                this.setState({ group: e.target.value })
              }}
            >
              {groups.map(s => {
                return (
                  <label>
                    <input
                      type="radio"
                      name="group"
                      value={s}
                      checked={this.state.group === s}
                    />
                    &nbsp;{s === 'all' ? s : `by ${s}`}&nbsp;
                  </label>
                )
              })}
            </fieldset>
          </div>
        <ListWithAnimation items={groupedItems} group={this.state.group} />
      </div>
    )
  }
}

export default App
