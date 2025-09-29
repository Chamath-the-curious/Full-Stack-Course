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

const Feedback = (props) => {
  const average = () => {
    return (props.good - props.bad) / props.all
  }

  const percentage = () => {
    return props.good / props.all * 100
  }

  return (
    <div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {props.all}</div>
      <div>average {average()}</div>
      <div>percentage {percentage()} % </div>
    </div>
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
      <Feedback good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App
