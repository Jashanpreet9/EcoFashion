import React from 'react'
export default function Card({title, description, imageUrl, InfoUrl}) {
  return (
   //{const [title, description, imageUrl, newsUrl]= props;}
    <>
     <div className='my-3' >
     <div className="card my-3" style={{width: "15rem",height:"70vh"}}>
  {/*<img src="https://i.blogs.es/b2ccf8/mejores-ofertas-fin-de-semana-febrero-mediamarkt/840_560.jpeg" className="card-img-top" alt="..."/>*/}
  <img src= {!(imageUrl)?"https://source.unsplash.com/300x200/?disaster,earhquakes,thunderandlightning":imageUrl } className="card-img-top" style={{height:"50vh"}} alt="..."/>
  <div className="card-body d-flex flex-column justify-content-center align-items-center">
    <h5 className="card-title text-center">{title}</h5>
    <p className="card-text"> {description} </p>
    <a href={InfoUrl} target ="_blank"  className = "btn btn-sm btn-success " style={{backgroundColor:"#024f4f"}}>Shop Now</a>
  </div>
</div>
      </div>
    </>
  )
}
