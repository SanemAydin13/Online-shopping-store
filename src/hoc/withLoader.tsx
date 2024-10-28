import React, { useState } from 'react'
import Example from '../components/Example';

const withLoader = (WrappedComponent ) => {
  return(props) =>{
    const[loading, setLoading] = useState(true);

    setTimeout(()=>{
        setLoading(false);
    }, 2000);
    
    return(
        <div>{loading ? <Example type ="bars" color='#ccccff'/> : <WrappedComponent {...props}/>}</div>
    )
  }
}

export default withLoader
