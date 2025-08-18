import { useState } from 'react';

export default function useCopy() {
  const [copiedEmail,setCopiedEmail] =useState(false)
  
  function copyEmail() {
    setCopiedEmail(true)
    const email = 'ahmedalaaalden@gmail.com'  
    navigator.clipboard.writeText(email).then(() => {
      setTimeout(() => {
      setCopiedEmail(false)
    },2000)
    })
    
    }
  
    return {copiedEmail,copyEmail}
}
