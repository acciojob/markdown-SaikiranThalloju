
import React,{useEffect, useState} from 'react'

const Markdown = () => {
    const [markdownText,setMarkDownText] = useState()
    const [htmlText,setHtmlText] = useState("");


    useEffect(()=>{
  marked.parse(markdownText)
    },[markdownText])
  return (
    <div className='markdown'>
        <div className='mark'>
            <textarea
            placeholder='Enter your markdown here'
            onChange={e =>setMarkDownText(e.target.value)}
            value={markdownText}/>

            
        </div>
        <div className='html'>


        </div>
      
    </div>
  )
}

export default Markdown
