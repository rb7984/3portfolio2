import React from 'react'
import './index.css'

export function Banner({ visibility }) {
  var banner = [
    'Hi There! My Name is Riccardo Barelli, I am a Architecture and Civil\nEngineering graduate from Bologna. Here are some of my projects!',
    'This is the first project, a Pop-Up Store for Dior, made for my curricular stage at 3dWasp.',
    'This my thesis project, a modular sistem developed to explore the possibility of an infinite  design.',
    'This is the result of Composition course, for which we designed a cable-car in Bologna.'
  ]

  var textShow = banner[visibility] || 'Error'
  return <div className="banner">{textShow}</div>
}
