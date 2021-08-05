import { atom } from 'recoil'

export const recoilState = atom({
  key: 'recoilState',
  default: {
    counterA: 0,
    counterB: 0,
  },
})
