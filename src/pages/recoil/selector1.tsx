import { memo } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { binaryCounterSelector } from 'selectors/binaryCounterSelector'
import { counterState } from 'state/counterState'
import Link from 'next/link'

const Selector1 = memo(() => {
  const count = useRecoilValue(counterState)
  const binaryCount = useRecoilValue(binaryCounterSelector)
  const setCount = useSetRecoilState(counterState)

  return (
    <div>
      <div>Example of selector</div>
      <div>
        <button onClick={() => setCount((n) => n + 1)}>+1</button>
      </div>
      <div>raw&nbsp;&nbsp;&nbsp;&nbsp;: {count}</div>
      <div>binary: {binaryCount}</div>
      <div>
        <Link href="/recoil/selector2">
          <a>Next</a>
        </Link>
      </div>
    </div>
  )
})

export default Selector1
