import React from 'react'

const Card = ({item}) => {

  const {img, name, composition} = item;

  return (

    <div className='card'>
      <div className='card_img_wrapper'>
        <img src={img} alt="" />
      </div>
      <div className='card_name_btn'>
        <h3>{name}</h3>
        <button className='card_btn'>Bunu Seç</button>
      </div>
      <div className='card_desc_wrapper'>
        <p>{composition}</p>
      </div>
    </div>

  );

}

export default Card;