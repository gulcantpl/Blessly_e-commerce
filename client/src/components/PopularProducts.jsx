import React, { useEffect, useState } from 'react';
import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { useAppContext } from '../context/AppContext';
import Item from './Item';

const PopularProducts = () => {
    const { products } = useAppContext();
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {

        const data = products.filter((item) => item.popular && item.inStock).slice(0, 10); // İlk 10 popüler ürünü aldık
        setPopularProducts(data);
    }, [products]);

    return (
        <section className='maxx-padd-container mt-28'>

            <Title
                title1={'Popular'}
                title2={'Products'}
                titleStyles={'pb-10'}
            />

            {/* Swiper Container */}
            {
                <Swiper
                    spaceBetween={40}

                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        555: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1022: {
                            slidesPerView: 3.5,
                        },
                        1350: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="min-h-[399px] w-full"
                >
                    {popularProducts.map((product) => (
                        <SwiperSlide key={product._id} className='pb-10'>
                            <Item product={product} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            }
        </section>
    );
}

export default PopularProducts;