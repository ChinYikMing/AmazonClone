import React from 'react'
import { Typography } from '@material-ui/core'
import SpecificCategoryProduct from '../SpecificCategoryProduct'
import StarIcon from '@material-ui/icons/Star'
import '../specificCategoryProductStyles.css'

function AmazonBasics({ title }) {
    return (
        <>
            <div className="specific-product-title">
                <Typography variant="h2">
                    {title}
                </Typography>
            </div>
            <div className="specific-product-list">
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/812C5q3i5+L._AC_UL320_.jpg"
                    title="AmazonBasics Electric Glass and Steel Kettle - 1.7-Liter"
                    producer="Unknown"
                    shipDestination="Taiwan"
                    price="328.08"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/81wUWVAiWDL._AC_UL320_.jpg"
                    title="AmazonBasics Blue, White, and Yellow Microfiber Cleaning Cloth - Pack of 24"
                    producer="Unknown"
                    shipDestination="Taiwan"
                    price="15.49"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/61gawIiuEBL._AC_UL320_.jpg"
                    title="AmazonBasics AA High-Capacity Ni-MH Rechargeable Batteries (2400 mAh), Pre-charged - Pack of 8"
                    producer="Unknown"
                    shipDestination="Taiwan"
                    price="18.99"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
            </div>
        </>
    )
}

export default AmazonBasics
