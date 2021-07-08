import { memo, useRef } from 'react'

const ControlDOM = memo(() => {
  const ref = useRef<HTMLDivElement>(null)
  const add = () => {
    if (!ref.current) {
      return
    }

    const node = document.createElement('a')
    node.href = '/'
    node.innerText = 'Go to top page'

    ref.current.appendChild(node)
  }

  return (
    <div>
      <div>Control DOM</div>
      <div ref={ref} />
      <div>
        <button onClick={add}>add node to ↑</button>
      </div>
    </div>
  )
})

export default ControlDOM
