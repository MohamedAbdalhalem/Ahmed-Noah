import { useState } from 'react';

export default function useCopy() {
  const [copiedEmail,setCopiedEmail] =useState(false)
  const [copiedPhone,setCopiedPhone] =useState(false)
  function copyEmail() {
    setCopiedEmail(true)
    const email = 'ahmedalaaalden@gmail.com'  
    navigator.clipboard.writeText(email).then(() => {
      setTimeout(() => {
      setCopiedEmail(false)
    },2000)
    })
    
    }
  function copyPhone() {
      setCopiedPhone(true)
        const phone = '+201030657156'
      navigator.clipboard.writeText(phone).then(() => {
          setTimeout(() => {
      setCopiedPhone(false)
    },2000)
        })
    }
    return {copiedEmail,copiedPhone,copyEmail,copyPhone}
}
