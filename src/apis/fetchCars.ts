let id: number | undefined

type CarsResponseItem = {
  id: number
  name: string
}
type CarsResponse = CarsResponseItem[]

export const fetchCars = async () => {
  if (id !== undefined) {
    clearTimeout(id)
    id = undefined
  }

  return new Promise<void>((resolve) => {
    id = window.setTimeout(() => resolve(), 1000)
  }).then(() =>
    fetch('/data.json').then((response) => {
      if (response.ok) {
        return response.json() as Promise<CarsResponse>
      } else {
        throw response
      }
    })
  )
}
