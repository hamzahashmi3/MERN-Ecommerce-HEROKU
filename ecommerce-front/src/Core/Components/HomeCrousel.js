import React, {useState} from 'react';
import InfiniteCarousel from 'react-leaf-carousel';



function HomeCrousel() {
    
    const [banner, setBanner] = useState([
        {img:"/img/categories/cat-1.jpg"},
        {img:'/img/categories/cat-2.jpg'},
        {img:"/img/categories/cat-3.jpg"},
        {img:"/img/categories/cat-4.jpg"},
        {img:"/img/categories/cat-5.jpg"},
        {img:"/img/categories/cat-6.jpg"},
        {img:"/img/categories/cat-7.jpg"},
        {img:"/img/categories/cat-8.jpg"}
    ])

    const {img1, img2, img3, img4, img5, img6, img7, img8} = banner;

    return (
            <InfiniteCarousel breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        },
                    },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={1}
                    slidesToShow={4}
                    scrollOnDevice={true} >

                        
                            <div>
                                <img alt='' src='/img/categories/cat-1.jpg' />
                            </div>
                            <div>
                                <img alt='' src='/img/categories/cat-2.jpg' />
                            </div>
                            <div>
                                <img alt='' src='/img/categories/cat-3.jpg' />
                            </div>
                            <div>
                                <img alt='' src='/img/categories/cat-4.jpg' />
                            </div>
                            <div>
                                <img alt='' src='/img/categories/cat-5.jpg' />
                            </div>
                            {/* <div>
                                <img alt='' src='/img/categories/cat-6.jpg' />
                            </div>
                            <div>
                                <img alt='' src='/img/categories/cat-7.jpg' />
                            </div>
                            <div>
                                <img alt='' src='/img/categories/cat-8.jpg' />
                            </div> */}

        </InfiniteCarousel>
    )
}

export default HomeCrousel
