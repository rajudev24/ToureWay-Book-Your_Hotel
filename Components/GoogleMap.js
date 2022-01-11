import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const GoogleMap = () => {
    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    });
    return (
        <ReactMapGL
            mapStyle='mapbox://styles/rajudeb/ckya467fz1l6p14qsmepgwxko'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewPort}
        >

        </ReactMapGL >
    );
};

export default GoogleMap;