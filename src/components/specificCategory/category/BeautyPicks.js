import React from 'react'
import { Typography } from '@material-ui/core'
import SpecificCategoryProduct from '../SpecificCategoryProduct'
import StarIcon from '@material-ui/icons/Star'
import '../specificCategoryProductStyles.css'

function BeautyPicks({ title }) {
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
                    imgSrc="https://www.amazon.com/images/I/41YuSwjJUIL._AC_US160_.jpg"
                    title="CeraVe Hydrating Face Wash | 16 Ounce | Daily Facial Cleanser for Dry Skin | Fragrance-Free"
                    producer="CeraVe"
                    shipDestination="Taiwan"
                    price="14.64"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/41xajWP8DVL._AC_US160_.jpg"
                    title="Neutrogena Hydro Boost Hyaluronic Acid Hydrating Water Gel Daily Face Moisturizer for Dry Skin, Oil-Free, Fragrance-Free, Non-Comedogenic & Dye-Free Face Lotion, 1.7 fl. oz"
                    producer="Neutrogena"
                    shipDestination="Taiwan"
                    price="14.35"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/41nDloYXRXL._AC_US160_.jpg"
                    title="Listerine Freshburst Antiseptic Mouthwash with Germ-Killing Oral Care Formula to Fight Bad Breath, Plaque and Gingivitis, 500 mL"
                    producer="Listerine"
                    shipDestination="Taiwan"
                    price="3.97"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
            </div>
        </>
    )
}

export default BeautyPicks
