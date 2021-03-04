import React from 'react'
import { Typography } from '@material-ui/core'
import SpecificCategoryProduct from '../SpecificCategoryProduct'
import StarIcon from '@material-ui/icons/Star'
import '../specificCategoryProductStyles.css'

function DealsAndPromotions({ title }) {
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
                    imgSrc="https://www.amazon.com/images/I/41YsALOEsIL._AC_SR400,600_.jpg"
                    title="Dash DMAF360GBBK02 AirCrisp Pro Electric Air Fryer + Oven Cooker with Digital Display + 8 Presets, Temperature Control, Non Stick Fry Basket, Recipe Guide + Auto Shut Off Feature, 3qt, Black"
                    producer="Dash"
                    shipDestination="Taiwan"
                    price="69.99"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/71i5-QOLmBL._AC_SY355_.jpg"
                    title=" 1080P Webcam with Microphone for Desktop, BENENO Autofocus FHD USB Webcam with 110 Degree Wide Angle Lens & Auto Dimmer for Streaming, FaceTime, Video Recording, Conferencing, Gaming"
                    producer="Beneno"
                    shipDestination="Taiwan"
                    price="34.99"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/61wOmBH4%2BFL._AC_SX425_.jpg"
                    title="LET'S GO! Binocular for Kids, Compact High Resolution Shockproof 8X Bird Watching Toys Perfect for Outdoor Hiking Games - Best Gifts for 3-12 Years Old Kids"
                    producer="DIMY AND Fulfilled by Amazon"
                    shipDestination="Taiwan"
                    price="12.74"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
            </div>
        </>
    )
}

export default DealsAndPromotions
