export const fetchRandomNumber = async () => {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(Math.floor(Math.random() * 10)), 1000)
  })
}
