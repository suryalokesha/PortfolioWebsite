import React from 'react'
import CV from '../../assets/Surya Lokesh_Addagalla_CV.pdf'

const DownloadAction = () => {
  return (
    <div className='downloadAction'>
        <a href = {CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default DownloadAction