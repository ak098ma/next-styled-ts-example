export const fetchRandomNumber = async () => {
  return fetch('/api/random')
    .then((res) => res.text())
    .then((text) => Number(text))
}
