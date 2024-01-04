import React from 'react'
import './Collection.css'
import new_collections from '../Assests/new_collections'
import Item from '../Item/Item'

const Collection = () => {
  return (
    <div className='newcollection'>
        <h1>New Collection</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Collection