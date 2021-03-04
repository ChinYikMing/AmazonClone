import React from 'react'
import ComputerAndAccesories from './category/ComputerAndAccesories'
import Electronics from './category/Electronics'
import AmazonBasics from './category/AmazonBasics'
import BeautyPicks from './category/BeautyPicks'
import DealsAndPromotions from './category/DealsAndPromotions'
import GetFitAtHome from './category/GetFitAtHome'

function SpecificCategoryProductList({ categoryName }) {
    
    const trimCategory = categoryName.split(" ").join("");

    if(trimCategory === 'ComputerAndAccesories')
        return <ComputerAndAccesories title={categoryName}/>
    else if(trimCategory === 'Electronics')
        return <Electronics title={categoryName} />
    else if(trimCategory === 'AmazonBasics')
        return <AmazonBasics title={categoryName} />
    else if(trimCategory === 'BeautyPicks')
        return <BeautyPicks title={categoryName} />
    else if(trimCategory === 'DealsAndPromotions')
        return <DealsAndPromotions title={categoryName} />
    else if(trimCategory === 'GetFitAtHome')
        return <GetFitAtHome title={categoryName} />
}

export default SpecificCategoryProductList
