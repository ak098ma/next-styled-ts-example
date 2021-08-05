import { selector, DefaultValue } from 'recoil'
import { counterState } from 'state/counterState'

export const binaryCounterSelector = selector<string>({
  key: 'binaryCounter',
  get: ({ get }) => {
    const count = get(counterState)
    return count.toString(2)
  },
  set: ({ set }, binary) => {
    if (binary instanceof DefaultValue) {
      set(counterState, binary)
      return
    }

    const parsed = parseInt(binary, 2)
    if (isNaN(parsed)) {
      return
    }

    set(counterState, parsed)
  },
})
