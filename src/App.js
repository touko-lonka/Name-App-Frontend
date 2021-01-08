import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuBar from './components/MenuBar'
import NameTable from './components/NameTable'
import NumberAvatar from './components/NumberAvatar'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  const [names, setNames] = useState([])
  const [checkName, setCheckName] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:3001/api/names')
      setNames(response.data)
    }
    getData()
  }, [])

  const namesToShow = names.filter((n) =>
    n.name.toLowerCase().includes(checkName.toLowerCase())
  )

  const sortedNamesByAmount = [...namesToShow].sort(
    (a, b) => b.amount - a.amount
  )

  const sortedNamesByNames = [...namesToShow].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  const sum = (items, prop) => {
    return items.reduce((a, b) => {
      return a + b[prop]
    }, 0)
  }

  const total = sum(names, 'amount')

  const handleCheckChange = (event) => {
    setCheckName(event.target.value)
  }

  return (
    <div>
      <MenuBar checkName={checkName} checkChange={handleCheckChange} />
      <Switch>
        <Route path="/total">
          <NumberAvatar total={total} />
        </Route>
        <Route path="/byname">
          <NameTable names={sortedNamesByNames} sortedBy={'name'} />
        </Route>
        <Route path="/">
          <NameTable names={sortedNamesByAmount} sortedBy={'amount'} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
