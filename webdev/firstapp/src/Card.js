import React from 'react';

const Card = ({name, email, id}) => { return (

      	<div className="fl w5 ma1 bg-washed-blue ba br3 grow">
      		<img className='br-100 h4 w4 dib ba b-white-05' alt='pic' src={`https://robohash.org/${id}?300x300`}/>
      		<h1 className='f3 mb2'>{name}</h1>
      		<p className='f5 fw4 gray mt0'>{email}</p>
      	</div>
      	

);}

export default Card;