import React from 'react'

export default function About(props) {
  return (
    <div className='container my-3' style={{color : props.mode.color}}>
      <h3>About us</h3>
      <p>We can change your text into Uppercase, Lowercase. We can remove extra space from your text. We also provide information about text like number of words, Nunber of characters, Number of Spaces, Average time to read the Text and etc.</p>
      <h4>Thank you</h4>
    </div>
  )
}
