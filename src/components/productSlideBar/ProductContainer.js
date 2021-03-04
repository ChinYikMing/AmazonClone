import React from 'react'

function ProductContainer({ imgSrc, name}) {
    return (
        <img src={imgSrc} alt={name} />
    )
}

export default ProductContainer
