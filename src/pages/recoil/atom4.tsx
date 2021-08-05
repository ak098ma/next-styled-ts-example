import { memo } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import Link from 'next/link'
import { counterState } from 'state/counterState'

const Action = memo(() => {
  const reset = useResetRecoilState(counterState)
  return <button onClick={() => reset()}>Reset</button>
})

const Viewer = memo(() => {
  const count = useRecoilValue(counterState)
  return <div>{count}</div>
})

const Atom4 = memo(() => {
  return (
    <div>
      <div>Example of reset</div>
      <Action />
      <Viewer />
      <Link href="/recoil/selector1">
        <a>Next</a>
      </Link>
    </div>
  )
})

export default Atom4
