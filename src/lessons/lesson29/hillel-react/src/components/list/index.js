import React from 'react'

export default function List(props) {
  const { data, Card } = props;
    return (
      <OtherContext>
        {data.map((item) => <Card key={item.title} data={item}/>)}
      </OtherContext>
    )}
}
