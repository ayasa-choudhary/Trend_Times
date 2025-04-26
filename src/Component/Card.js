import React from 'react'

const Card = ({DATA1}) => {
    console.log(DATA1);

   const readmore = (url)=>{
    window.open(url)

   }
    return(
        <div className='cardcontainer'>
            {DATA1.map((curItem, index)=>{
                if (!curItem.urlToImage){
                    return null
                }else{
                return(
                    <div className='card'>
                        <img src={curItem.urlToImage}/>
                        <div className='content'>
                            <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                            <p>{curItem.description}</p>
                            <button onClick={ ()=>window.open(curItem.url)}>Read More</button>
                        </div>

                    </div>
                )
}})}
        </div>
    )

}
export default Card