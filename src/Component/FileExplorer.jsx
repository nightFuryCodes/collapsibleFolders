
import './fileExplorer.css'

import { Children } from 'react'
import { useState } from 'react'
import { FaArrowRight, FaFolder, FaFolderMinus, FaFolderOpen } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa'

export default function FileExplorer({ data }){
    
    const[showChild, setShowChild] = useState(false);

    return <div className = 'container'>

        <div onClick={()=>setShowChild(!showChild)}>
            {showChild ? <FaFolderOpen/> : <FaFolder/>}
            <span>{data.name}</span></div>
            {
                showChild && data?.children?.map(i=>{
                    return<FileExplorer data={i}/>
                })
            }
    </div>
}

