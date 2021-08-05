import { memo, useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'

type StyledContentProps = {
  count: number
}

const StyledContent = styled.div<StyledContentProps>`
  font-size: 18px;
  font-weight: 700;

  > div > button {
    background-color: ${(props) => (props.count % 2 === 0 ? '#aaf' : '#afa')};
  }
`

const Home = memo(() => {
  const router = useRouter()

  const [count, setCount] = useState(0)
  const doubleCount = useMemo(() => count * 2, [count])
  const countUp = useCallback(() => setCount((n) => n + 1), [])
  const goToControlDomPage = useCallback(
    () => router.push('/control-dom'),
    [router]
  )

  return (
    <StyledContent count={count}>
      <div>query = {JSON.stringify(router.query)}</div>
      <div>
        <button onClick={countUp}>+1</button>
      </div>
      <div>count = {count}</div>
      <div>count * 2 = {doubleCount}</div>
      <div>
        <Link href="/cars">
          <a>Go to cars page</a>
        </Link>
      </div>
      <div>
        <button onClick={goToControlDomPage}>Go to control-dom page</button>
      </div>
      <div>
        <Link href="/recoil/atom1">
          <a>Recoil Tutorial</a>
        </Link>
      </div>
    </StyledContent>
  )
})

export default Home
