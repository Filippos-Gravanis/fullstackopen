import { useState } from 'react'

const App = () => {
  const nextAnecdote = (anecdotes) => {
    const randomNumber = parseInt(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }
  const Vote = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1
    setPoints(pointsCopy)
    let max= 0
    for (let i=0;i<=pointsCopy.length;i++){
      if (pointsCopy[i]>pointsCopy[max]){
        max = i
      }
    }
    setMaxVotes(max)
  
    }

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
  const [points,setPoints]=useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [maxVotes,setMaxVotes] = useState(0)
  return (
    <div>
      {anecdotes[selected]}
      <p>Has {points[selected]}</p>
      <p>
        <button onClick={()=>{nextAnecdote(anecdotes)}}>Next Anecdote</button>
        <button onClick={Vote}>Vote</button>  
      </p>
      <p>Anecdote With Most Points</p>
      {anecdotes[maxVotes]}
      <p>Has {points[maxVotes]}</p>
    </div>
  )
}

export default App