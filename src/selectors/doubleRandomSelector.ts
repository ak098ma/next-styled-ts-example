import { randomSelector } from './randomSelector'
import { selector } from 'recoil'

export const doubleRandomSelector = selector({
  key: 'doubleRandomSelector',
  get: ({ get }) => {
    const result = get(randomSelector)
    return result * 2
  },
})
