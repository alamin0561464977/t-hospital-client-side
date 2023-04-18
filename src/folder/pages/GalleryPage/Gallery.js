import React, { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/userContext';

const Gallery = () => {
    const { name } = useContext(AuthContext);
    return (
        <div>
            This is Gallery
            <h1>{name}</h1>
        </div>
    );
};

export default Gallery;