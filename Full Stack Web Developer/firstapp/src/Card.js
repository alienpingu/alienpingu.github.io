import React from 'react';

const Card = ({name, email, id}) => { return (

      	<div className="mw5 tc center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 grow">
      		<img className='br-100 h4 w4 dib ba b--black-05 pa2' alt='pic' src={`https://robohash.org/${id}`}/>
      		<h1 className='f3 mb2'>{name}</h1>
      		<p className='f5 fw4 gray mt0'>{email}</p>
      	</div>
      	

);}

export default Card;