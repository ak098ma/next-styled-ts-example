import { memo } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Link from 'next/link'
import { counterState } from 'state/counterState'

const Action = memo(() => {
  const setCount = useSetRecoilState(counterState)
  return <button onClick={() => setCount((n) => n + 1)}>+1</button>
})

const Viewer = memo(() => {
  const count = useRecoilValue(counterState)
  return <div>{count}</div>
})

const Atom2 = memo(() => {
  return (
    <div>
      <div>Example of 'useRecoilValue' and 'useSetRecoilState'</div>
      <Action />
      <Viewer />
      <Link href="/recoil/atom3">
        <a>Next</a>
      </Link>
    </div>
  )
})

export default Atom2
