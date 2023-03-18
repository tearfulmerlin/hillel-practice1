import React, { useState } from 'react'

export default function Button(props) {
  const [count, setCount] = useState({ count: 0 });

  const { globalCount, title, setCount: setGlobalCount } = props;
  // const setGlobalCount = props.setCount;
  const handler = () => {
    console.log('clicked');
    setGlobalCount(globalCount + 1)
    setCount({ count: count.count + 1 })
  }

  const content = title
    ? (
      <button onClick={handler}>click me from
        {
          typeof title === 'function'
            ? title()
            : title
        }
        {' '}
        {count.count}
        {'; '}
        {'global: ' + globalCount}
      </button>
    )
    : null;



  return content;
}
