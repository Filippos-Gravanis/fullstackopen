import { useState } from 'react'

const Feedback = ({goodHandler,neutralHandler,badHandler}) => {
  return(
  <>
  <p>Give Feedback</p>
  <Button Handler={goodHandler} Text="Good" />
  <Button Handler={neutralHandler} Text="Neutral"/>
  <Button Handler={badHandler} Text="Bad"/>
  </>
  )
}

const Button = ({Text,Handler}) => {
  return(
  <button onClick={Handler}>{Text}</button>
  )
}

const Statistics = ({goodCount,neutralCount,badCount}) => {
  if (goodCount+neutralCount+badCount==0){
    return (
      <>
      <p>Statistics</p>
      <p>No Feedback Given</p>
      </>
    )
  }
  return (
    <table>
      
      <tbody>
      <tr>
      <th>Statistics</th>
      </tr>
    <StatisticsLine text="Good" value={goodCount} />
    <StatisticsLine text="Neutral" value={neutralCount} />
    <StatisticsLine text="Bad" value={badCount} />
    <StatisticsLine text="All" value={goodCount+neutralCount+badCount} />
    <StatisticsLine text="Average" value={(goodCount-badCount)/(goodCount+neutralCount+badCount)} />
    <StatisticsLine text="Positive" value={(goodCount/(goodCount+neutralCount+badCount)*100).toString().concat(" %") } />
    </tbody>
    </table>

  )
}
const StatisticsLine = ({text,value}) => {
  return(
    <tr>
      <th>
      {text} {value}
      </th>
    </tr>
    

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const addGood = () => {
    setGood(good+1)
  }
  const addNeutral = () => {
    setNeutral(neutral+1)
  }
  const addBad = () => {
    setBad(bad+1)
  }
  return (
    <div>
      <Feedback goodHandler={addGood} badHandler={addBad} neutralHandler={addNeutral} />
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
    </div>
  )
}

export default App