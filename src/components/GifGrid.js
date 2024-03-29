import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';




export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    // const [images, setImages] = useState([]);



    return (
        <>
            <h3 className="card animate__animated animate__lightSpeedInRight">{category}</h3>
            { loading && <p className="card animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}
