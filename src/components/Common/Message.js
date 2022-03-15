import React from 'react'

const Message = ({title}) => {
    
    return (
        <div className={`${title.includes("popular")? "title-list" : "another" }`}>
           {
           title.includes("popular") ? `${title}`: title
           }
        </div>
    )
}

export default Message
