import { fetchCars } from 'apis/fetchCars'
import { memo, useState, useEffect } from 'react'
import styled from 'styled-components'

type Car = {
  id: number
  name: string
}

const StyledCar = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
`

const Cars = memo(() => {
  const [cars, setCars] = useState<Car[]>()

  useEffect(() => {
    fetchCars()
      .then((res) => res.json())
      .then((json) => setCars(json.cars))
  }, [])

  return (
    <div>
      {!cars && '...'}
      {cars?.map((car) => (
        <StyledCar key={car.id}>{car.name}</StyledCar>
      ))}
    </div>
  )
})

export default Cars
