import { memo } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { doubleRandomSelector } from 'selectors/doubleRandomSelector'
import {
  randomSelector,
  useRefetchRandomNumber,
} from 'selectors/randomSelector'
import Link from 'next/link'

const Loadable2 = memo(() => {
  const loadable1 = useRecoilValueLoadable(randomSelector)
  const loadable2 = useRecoilValueLoadable(doubleRandomSelector)
  const refetch = useRefetchRandomNumber()

  return (
    <div>
      <div>Loadable example</div>
      <div>state1: {loadable1.state}</div>
      <div>state2: {loadable2.state}</div>
      <div>value1: {loadable1.state === 'hasValue' && loadable1.contents}</div>
      <div>value2: {loadable2.state === 'hasValue' && loadable2.contents}</div>
      <div>
        <button onClick={refetch}>Refetch</button>
      </div>
      <div>
        <Link href="/recoil/loadable3">
          <a>Next</a>
        </Link>
      </div>
    </div>
  )
})

export default Loadable2
