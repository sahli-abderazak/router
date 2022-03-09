import React from 'react'

function Rating({rate}) {
    const RatingArr = [1,2,3,4,5]
    return (
        <div>
        {RatingArr.map ((el)=>el <= rate ? <i class="fas fa-star"></i> : <i class="far fa-star"></i> )} 
        </div>
    )
}

export default Rating
