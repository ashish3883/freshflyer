import React from 'react'

const Newscard = (props) => {
    let { title, description, url, image, source, icon, creater, date} = props;
    let textStyle1 = {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
    
  return (
    <>
          <a href={url} className='link' target='blank'><div className="card mb-3 bg-info text-dark" >
              <span className="position-absolute top-0 end-0 badge ">
                  <img src={icon} height={"40px"} alt={source} />
              </span>
              <img src={!image ?'https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg':image} className="card-img-top fit rounded mh-100" width={'622px'} height={'350px'} alt="..."/>
                  <div className="card-body" >
                  <h5 className="card-title " style={textStyle1}>{title}</h5>
                  <p className="card-text" style={textStyle1} >{description}</p>
                  <div className="d-flex justify-content-between">
                  <span className="card-text"><small className="text-muted">Published On {date}</small></span>
                  <span className="card-text" ><small className="text-muted">Published by {creater===null?"Unknown":creater}</small></span>
                  </div>
                  </div>
          </div> 
          </a>
    </>
  )
}

export default Newscard
