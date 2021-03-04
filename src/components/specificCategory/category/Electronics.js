import React from 'react'
import { Typography } from '@material-ui/core'
import SpecificCategoryProduct from '../SpecificCategoryProduct'
import StarIcon from '@material-ui/icons/Star';
import '../specificCategoryProductStyles.css'

function Electronics({ title }) {
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
                    imgSrc="https://www.amazon.com/images/I/31jBba7+ySL._AC_US160_.jpg"
                    title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox (STGX2000400)"
                    producer="Seagate"
                    shipDestination="Taiwan"
                    price="62.49"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/51wpN1SESrL._AC_US160_.jpg"
                    title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                    producer="AMD"
                    shipDestination="Taiwan"
                    price="279.99"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/51N+uZrhNNL._AC_US160_.jpg"
                    title="HP 65 | Ink Cartridge | Black | N9K02AN"
                    producer="HP"
                    shipDestination="Taiwan"
                    price="15.89"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
            </div>
        </>
    )
}

export default Electronics
