import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const setSelectedValue = newValue => {
    const randomValue = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomValue)
    console.log('selected => ' + selected)
  }

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  const setVotesValue = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log('copy[selected] => ' + copy[selected])
  }

  const highestVotes = Math.max(...votes)

  const mostVotedAnecdote = anecdotes[votes[highestVotes]]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <p>Has {votes[selected]} votes.</p>
      <Button handleClick={() => setVotesValue()} text='Vote'/>
      <Button handleClick={() => setSelectedValue()} text='Next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <h2>{mostVotedAnecdote}</h2>
      <p>Has {highestVotes} votes</p>

    </div>
  )
}

export default App