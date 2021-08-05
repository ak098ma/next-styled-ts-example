import { fetchRandomNumber } from 'apis/fetchRandomNumber'
import { atom, selector, useSetRecoilState } from 'recoil'

const requestIdState = atom({
  key: 'requestIdState',
  default: 0,
})

export const randomSelector = selector({
  key: 'randomSelector',
  get: async ({ get }) => {
    get(requestIdState)
    return fetchRandomNumber()
  },
})

export const useRefetchRandomNumber = () => {
  const setRequestId = useSetRecoilState(requestIdState)
  return () => setRequestId((id) => id + 1)
}
