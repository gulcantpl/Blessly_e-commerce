import React from 'react'

const Title = ({
    title1,
    title2,
    titleStyles,
    title1Styles,
    paraStyles,
    para,
}) => {
    return (

        <div className={titleStyles}>
            <h1 className={`${title1Styles} h2 capitalize text-center`}>
                {title1}
                <span className='font-light ml-2'>{title2}</span>
            </h1>
            <div className='w-70 h-[3px] md:w-200 rounded-full mx-auto my-5 bg-linear-to-r from-[#DDD9FF] via-secondary to-[#DDD9FF]'></div>
            <p className={`${paraStyles} max-w-lg mt-2 text-center mx-auto`}>
                {para ? para : "Discover our new products and bring new styles to your makeup routine"}
            </p>
        </div>
    )
}

export default Title