import usePizzaData from 'hooks/usePizzaData';
import React, { useEffect } from 'react'

export default function withTitle(Component, title) {
  return function Header(props) {
    return (
      <>
        <div className='title'>
          <h1>{title}</h1>
        </div>
        <Component {...props} />
      </>
    );
  }
}

export function withData(List, Card, getData) {
  const { data } = getData();

  const props = {
    title: 'some title',
    name: 'some user',
    role: 'admin',
  }

  return function ListWithData(props) {
    return <List {...props} data={data} Card={Card}/>
    // return <List title={props.title} name={props.name} role={role} data={data} Card={Card}/>
  }
}
