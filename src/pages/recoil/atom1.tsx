import { memo } from 'react'
import { useRecoilState } from 'recoil'
import Link from 'next/link'
import { counterState } from 'state/counterState'

const Atom1 = memo(() => {
  const [count, setCount] = useRecoilState(counterState)

  return (
    <div>
      <div>Example of 'useRecoilState'</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      <div>{count}</div>
      <Link href="/recoil/atom2">
        <a>Next</a>
      </Link>
    </div>
  )
})

export default Atom1
