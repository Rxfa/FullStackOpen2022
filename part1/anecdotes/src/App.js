import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Anecdote = (props) => (
  <h2>{props.text}</h2>
)

const VoteCounter = (props) => (
  <p>Votes: {props.votes}</p>
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
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  const getrandomAnecdote = newValue => {
    const randomValue = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomValue)
  }

  const getVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const highestVotes = Math.max(...votes)
  const mostVotedAnecdote = anecdotes[votes.indexOf(highestVotes)]
  const selectedAnecdote = anecdotes[selected]
  const selectedAnecdoteVotes = votes[selected]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={selectedAnecdote} />
      <VoteCounter votes={selectedAnecdoteVotes}/>
      <Button handleClick={() => getVotes()} text='Vote'/>
      <Button handleClick={() => getrandomAnecdote()} text='Next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <Anecdote text={mostVotedAnecdote} />
      <VoteCounter votes={highestVotes}/>
    </div>
  )
}

export default App