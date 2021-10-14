import { memo } from 'react'
import Link from 'next/link'
import { useRecoilValueLoadable } from 'recoil'
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
      <div>
        <Link href="/recoil/loadable2">
          <a>Next</a>
        </Link>
      </div>
    </div>
  )
})

export default Loadable
