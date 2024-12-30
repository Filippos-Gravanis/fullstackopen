const Course = ({course}) => {
  
    return (
      <>
      <Header value={course.name} />
      <Content parts={course.parts} />
      </>
    )
  }
  const Content = ({parts}) => {
    return(
     <>
    <ul>
    {
      parts.map((part)=>{
        return <li key={part.id}>{part.name} {part.exercises}</li>
      })
    }
    <li>Total of  {parts.reduce((sum,part)=>{
      return sum += part.exercises
    },0)} Exercices</li>
    </ul>
    
    </> 
    )
  } 
  const Header = ({value}) => {
    return (
    <h1>{value}</h1>  
    )
  }
  

export default Course