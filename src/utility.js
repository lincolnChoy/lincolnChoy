import React from 'react'

export const getSpanArray = (text) => {
  let content = []

  for (let i = 0; i < text.length; i++) {
    content.push(<span className="bounce" key={i}>{text[i]}</span>)
  }

  return content
}