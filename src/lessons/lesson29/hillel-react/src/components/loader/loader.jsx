import React from 'react'

export default function Loader({ children, isLoading }) {
  return isLoading
    ? 'Loading...'
    : (
      <div>{children}</div>
    )
}
