import React, { useState, useEffect } from 'react';
import { fetchAlbums, fetchPhotos } from '../api';

function AlbumsPhotos() {
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const albumsData = await fetchAlbums();
        const photosData = await fetchPhotos();
        setAlbums(albumsData);
        setPhotos(photosData);
    };


    return (
        <div>
            <h1>Albums & Photos</h1>
            {/* <button onClick={loadData}>Load</button>
            <br />
            <br /> */}
            <div className='row'>
                {albums.map((album) => (
                    <div className='col-md-6' key={album.id}>
                        <div className='card mb-4'>
                            <div className='card-body'>
                                <h5 className='card-title'>{album.title}</h5>
                                <h6>Photos:</h6>
                                <div className='row'>
                                    {photos
                                        .filter((photo) => photo.albumId === album.id)
                                        .map((photo) => (
                                            <div className='col-md-4' key={photo.id}>
                                                <div className='card mb-2'>
                                                    <img src={photo.thumbnailUrl} className='card-img-top' alt={photo.title} />
                                                    <div className='card-body'>
                                                        <p className='card-text'>{photo.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AlbumsPhotos