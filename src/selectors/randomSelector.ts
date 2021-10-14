import { fetchRandomNumber } from 'apis/fetchRandomNumber'
import {
  atom,
  selector,
  useSetRecoilState,
  useRecoilValueLoadable,
} from 'recoil'

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
  const loadable = useRecoilValueLoadable(randomSelector)
  const setRequestId = useSetRecoilState(requestIdState)
  if (loadable.state === 'loading') {
    return () => {}
  }
  return () => setRequestId((id) => id + 1)
}
