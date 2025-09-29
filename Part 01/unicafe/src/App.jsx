import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.option}</button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const average = () => {
    return (props.good - props.bad) / props.all
  }

  const percentage = () => {
    return props.good / props.all * 100
  }

  if (props.all === 0)
    return <div>No feedback given</div>

  return (
    <table>
      <tbody>
        <StatisticsLine text={"good"} value={props.good}/>
        <StatisticsLine text={"neutral"} value={props.neutral}/>
        <StatisticsLine text={"bad"} value={props.bad}/>
        <StatisticsLine text={"average"} value={average()}/>
        <StatisticsLine text={"percentage"} value={percentage()}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  return (
    <div>
      <Header text={"give feedback"}/>
      <div>
        <Button onClick={() => setGood(good + 1)} option={"good"} />
        <Button onClick={() => setNeutral(neutral + 1)} option={"neutral"} />
        <Button onClick={() => setBad(bad + 1)} option={"bad"} />
      </div>
      <Header text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App
