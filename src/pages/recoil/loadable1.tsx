import { memo } from 'react'
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import {
  randomSelector,
  useRefetchRandomNumber,
} from 'selectors/randomSelector'

const Loadable = memo(() => {
  const loadable = useRecoilValueLoadable(randomSelector)
  const refetch = useRefetchRandomNumber()

  return (
    <div>
      <div>Loadable example</div>
      <div>state: {loadable.state}</div>
      <div>value: {loadable.state === 'hasValue' && loadable.contents}</div>
      <div>
        <button onClick={refetch}>Refetch</button>
      </div>
      <div>WIP: Next</div>
    </div>
  )
})

export default Loadable
