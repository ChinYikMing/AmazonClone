import React from 'react'
import { Typography } from '@material-ui/core'
import SpecificCategoryProduct from '../SpecificCategoryProduct'
import StarIcon from '@material-ui/icons/Star';
import '../specificCategoryProductStyles.css'

function ComputerAndAccesories({ title }) {
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
                    imgSrc="https://www.amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
                    producer="Acer"
                    shipDestination="Taiwan"
                    price="349.99"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
                    title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                    producer="HP"
                    shipDestination="Taiwan"
                    price="99.99"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
                <SpecificCategoryProduct
                    itemId="null"
                    imgSrc="https://www.amazon.com/images/I/31NBRkcO0ZL._AC_US160_.jpg"
                    title="WD 12TB Elements Desktop Hard Drive, USB 3.0 - WDBWLG0120HBK-NESN"
                    producer="Western Digital"
                    shipDestination="Taiwan"
                    price="219.99"
                >
                    {/* pass star icon as props.children */}
                    < StarIcon />
                </SpecificCategoryProduct>
            </div>
        </>
    )
}

export default ComputerAndAccesories
