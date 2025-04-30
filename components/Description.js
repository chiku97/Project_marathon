import React from 'react'

export default function Description({category}) {
  return (
      <div className="card-body">
              <p className="category-description">{category.description}</p>
            </div>
  )
}
