import React from 'react'
import './result.css'

export default function Result(props) {
    const boxes = props.movies.map(
        (item,index) => {
            return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average} />
        }
    )
    return (
        <div className='w-full grid md:grid-cols-5 gap-5 bg grad-3'>
            {boxes}
        </div>
    )
}

const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='shadow min-h-[200px] mt-3 pb-1 single-box  slide-down'>
            <img src={IMGPATH + props.image} alt="" className='w-full img-mv lock' />
            <div className='flex justify-between px-2 items-center'>
                <span className='text-2xl font-mont'>{props.title}</span>
                <span className='text-xl text-yellow-500 font-bold nat-rating'>{props.rating}</span>
            </div>
        </div>
    )
}