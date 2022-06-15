import {useState} from 'react'


const Button = ({clickHandle, text}) => {
    return (
        <button onClick={clickHandle}>
            {text} </button>
    )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all > 0 ? roundToTwo((good - bad) / all) : 0;
  const positive = all > 0 ? roundToTwo((good / all) * 100) : 0;

  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + " %"} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

// Round to two decimal places
const roundToTwo = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const handleGood = () => {
        setGood(good + 1)
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }
    const handleBad = () => {
        setBad(bad + 1)
    }


    return (
        <div>
            <h1>
                Give Feedback</h1>
            <Button clickHandle ={handleGood } text='good'/>
            <Button clickHandle ={handleNeutral } text='neutral'/>
            <Button clickHandle ={handleBad } text='bad'/>
            <h1>statistics</h1>
            <Statistics good={good}
                neutral={neutral}
                bad={bad}/>
        </div>
    )


}
export default App;
