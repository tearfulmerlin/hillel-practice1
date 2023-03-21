import React from 'react'
import './image.css';

export default function Image({ src, alt, className }) {
  return (
    <img src={src} alt={alt} className={className} />
  )
}
