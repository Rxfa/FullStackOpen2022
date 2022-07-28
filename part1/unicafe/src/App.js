import {useState} from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <div>
    <h2>Statistics</h2>
    <table>
      <Statisticline text='Good' value={props.good} />
      <Statisticline text='Neutral' value={props.neutral} />
      <Statisticline text='Bad' value={props.bad} />
      <Statisticline text='All' value={props.all} />
      <Statisticline text='Average' value={props.average} />
      <Statisticline text='Positive' value={props.positive + '%'} />
    </table>
  </div>
)

const Statisticline = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = bad + neutral + good
  const average = (good - bad)/all // good: 1 points; neutral: 0 points; bad: -1 points
  const positive = good/all

  const setGoodValue = newValue => {
    setGood(good + 1)
  }

  const setNeutralValue = newValue => {
    setNeutral(neutral + 1)
  }

  const setBadValue = newValue => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGoodValue()} text='Good'/>
      <Button handleClick={() => setNeutralValue()} text='Neutral'/>
      <Button handleClick={() => setBadValue()} text='Bad'/>
      {all
        ? <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
        : <p>No feedback given</p>
      }
    </div>
  );
}

export default App