import React from 'react'

export default function PlanetItem({ item }) {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <div>{item.name}</div>
      <div>{item.residents.length}</div>
    </div>
  )
}

