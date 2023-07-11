import React, { useEffect, useRef } from 'react'
import './index.css'

export function Page({trackCounter}) {
  const pageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = pageRef.current.scrollTop;
      const pageHeight = pageRef.current.clientHeight;
      const scrollHeight = pageRef.current.scrollHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - pageHeight)) * 100;

      const maxOpacity = 0.7; // Adjust the maximum opacity value as needed
      const opacity = (scrollPercentage / 100) * maxOpacity;

      pageRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    };

    const refCurrent = pageRef.current; // Copy pageRef.current to a local variable

    if (refCurrent) {
      refCurrent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className = "page" ref={pageRef}>
      <div style={{padding: "8% 0 3% 0"}}>This is the first project, a Pop-Up Store for Dior, made for my curricular stage at 3dWasp.</div>
      
      <div className='btnDown'>
        <div className='arrow-down'></div>
      </div>

      <div>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'white',
            margin: '20px auto',
          }}
        ></div> {/* Added white div element */}
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
      A <br/>
        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'white',
            margin: '20px auto',
          }}
        ></div> {/* Added white div element */}
      </div>
    </div>
  )
}
