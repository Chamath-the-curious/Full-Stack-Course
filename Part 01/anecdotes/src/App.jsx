import { useState } from 'react'

const randomNum = (max) => {
  return Math.floor(Math.random() * max);
} 

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const DisplayAnecdote = (props) => {
  return (
    <div>{props.text}</div>
  )
}

const DisplayVotes = (props) => {
  return (
    <div>has {props.numberOfVotes} votes</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0})

  const nextAnecdote = () => {
    setSelected(randomNum(anecdotes.length))
  }

  const vote = () => {
    const copy = {...votes}
    copy[selected] += 1
    setVotes(copy)
  }

  const [maxKey, maxValue] = Object.entries(votes).reduce(
    (max, curr) => (curr[1] > max[1] ? curr : max)
  )

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <DisplayAnecdote text={anecdotes[selected]} />
      <DisplayVotes numberOfVotes={votes[selected]} />
      <div>
        <Button onClick={vote} text={"vote"} />
        <Button onClick={nextAnecdote} text={"next Anecdote"} />
      </div>
      <Header text={"Anecdote with most votes"} />
      <DisplayAnecdote text={anecdotes[maxKey]} />
      <DisplayVotes numberOfVotes={maxValue} />
    </div>
  )
}

export default App
