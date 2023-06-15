import React from 'react'
const Footer = () => {
  var height='68px';
  var ptop='8px'
  if (navigator.userAgent.indexOf("Chrome") !== -1) {
    height='64px'
    ptop='8px'
   
  }
  else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    height='51px'
    ptop='1px'
    
  }
  return (
    <div className="footer-container "  >
     
    <footer className='bg-dark text-light ' style={{height:height, position:'fixed', width:'100%', bottom:0}}>

      <p className="text-center d-flex "  style={{paddingTop:ptop}}>
      
      </p>
      <p className="text-center foot">Made with ❤️ by &nbsp;
      <p  style={{display:'inline-flex'}} >

      <a href='https://www.namanarora.in' target="_blank" rel="noopener noreferrer" className='text-decoration-none text-light FootName'> 
       Naman Arora </a>
      </p>
      </p>
    </footer>
    </div>
  )
}

export default Footer
