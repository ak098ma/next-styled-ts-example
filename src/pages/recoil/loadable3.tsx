import { memo } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import {
  randomSelector,
  useRefetchRandomNumber,
} from 'selectors/randomSelector'

const A = memo(() => {
  const loadable1 = useRecoilValueLoadable(randomSelector)
  return (
    <div>
      <div>state1: {loadable1.state}</div>
      <div>value1: {loadable1.state === 'hasValue' && loadable1.contents}</div>
    </div>
  )
})

const B = memo(() => {
  const loadable2 = useRecoilValueLoadable(randomSelector)
  return (
    <div>
      <div>state2: {loadable2.state}</div>
      <div>value2: {loadable2.state === 'hasValue' && loadable2.contents}</div>
    </div>
  )
})

const Loadable3 = memo(() => {
  const refetch = useRefetchRandomNumber()

  return (
    <div>
      <div>Loadable example</div>
      <A />
      <B />
      <div>
        <button onClick={refetch}>Refetch</button>
      </div>
      <div>Next: WIP</div>
    </div>
  )
})

export default Loadable3
