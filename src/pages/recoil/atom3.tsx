import { memo } from 'react'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import Link from 'next/link'
import { counterState } from 'state/counterState'

const Action = memo(() => {
  const resetCount = useResetRecoilState(counterState)
  return <button onClick={resetCount}>+1</button>
})

const Viewer = memo(() => {
  const count = useRecoilValue(counterState)
  return <div>{count}</div>
})

const Atom3 = memo(() => {
  return (
    <div>
      <div>Example of re-render optimization</div>
      <Action />
      <Viewer />
      <Link href="/recoil/atom4">
        <a>Next</a>
      </Link>
    </div>
  )
})

export default Atom3
