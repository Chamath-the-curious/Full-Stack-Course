const Total = ({ parts }) => {
  const getTotal = () => {
    return parts.reduce((acc, part) => acc + part.exercises, 0)
  }

  return (
    <h3>total of {getTotal()} exercises</h3>
  )
}

export default Total
