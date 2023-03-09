import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function footer() {
  return (
    <div className='footer'>
        <div className='flex justify-center gap-10 my-5 text-white h-10 '>
            <TwitterIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <EmailIcon/>
        </div>
        <div className='mb-1 text-white text-base'> 
            <p>© Copyright 2023 BetterHealth</p>
            <p>Made with ❤ for you.</p>
        </div>
      
    </div>
  )
}
