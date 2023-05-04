import React, { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom';

export default function Authorization({status}) {
    const navigate = useNavigate();
    console.log(status, 'isLoggedIn')
    useEffect(() => {
        if (!status){
            redirect('/login') 
        }
    });
  return (
    <></>
  )
}
