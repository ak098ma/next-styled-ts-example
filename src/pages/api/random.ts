import { NextApiHandler } from 'next'

const wait = async (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const random: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).send('Method not allowed.')
    return
  }
  await wait(1000)
  const randomNumber = Math.floor(Math.random() * 10)
  res.status(200).send(randomNumber)
}

export default random
