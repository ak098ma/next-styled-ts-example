import { memo } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { counterState } from 'state/counterState'
import { binaryCounterSelector } from 'selectors/binaryCounterSelector'
import Link from 'next/link'

const Selector2 = memo(() => {
  const count = useRecoilValue(counterState)
  const binaryCount = useRecoilValue(binaryCounterSelector)
  const increment = useSetRecoilState(binaryCounterSelector)

  return (
    <div>
      <div>Example of bidirectional selector</div>
      <div>
        <button onClick={() => increment((b) => `${b}0`)}>×2</button>
      </div>
      <div>raw&nbsp;&nbsp;&nbsp;&nbsp;: {count}</div>
      <div>binary: {binaryCount}</div>
      <div>
        <Link href="/recoil/loadable1">
          <a>Next</a>
        </Link>
      </div>
    </div>
  )
})

export default Selector2
