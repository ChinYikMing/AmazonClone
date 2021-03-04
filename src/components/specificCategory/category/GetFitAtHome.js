import React from 'react'
import { Typography } from '@material-ui/core'
import SpecificCategoryProduct from '../SpecificCategoryProduct'
import StarIcon from '@material-ui/icons/Star'
import '../specificCategoryProductStyles.css'

function GetFitAtHome({ title }) {
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
                    imgSrc="https://www.amazon.com/images/I/51quRISG8KL._AC_US160_.jpg"
                    title="Renoj Resistance Bands, Resistance Bands Set for Exercise Band [11 Pack]"
                    producer="Renoj"
                    shipDestination="Taiwan"
                    price="34.99"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/41VX1tL+DlL._AC_US160_.jpg"
                    title="Fitbit Inspire HR Heart Rate and Fitness Tracker, One Size (S and L Bands Included), 1 Count"
                    producer="Fitbit"
                    shipDestination="Taiwan"
                    price="69.00"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/51M4WNYNh1L._AC_US160_.jpg"
                    title="Doctor Developed Premium Copper Lined Wrist Support/Wrist Strap/Wrist Brace/Hand Support [Single]& Doctor Written Handbook— Suitable for Both Right and Left Hands"
                    producer="Dr.Arthritis"
                    shipDestination="Taiwan"
                    price="12.95"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
            </div>
        </>
    )
}

export default GetFitAtHome
