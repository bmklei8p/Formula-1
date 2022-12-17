// import { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};


function TracksList() {
    const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    console.log(MAPS_API_KEY)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAPS_API_KEY,
    })

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (
        <div className="all-tracks-map">
        {isLoaded ? (
            <p> YAY! </p>
         ) : (
            <p>Boo!</p>
            )}
            <br />
            <br />
            <br />
            <br />
        </div>
    )
};

export default TracksList




// tried using the ergast api but getting a "readable stream" response - looked into a bit but do not fully understand how to resolve.
// will try to use another api to avoid this  --- Resolved by taking response.json() and awaiting that function

// need to have two maps: one of european only and one of worldwide. probably have state on this one page to determine which to show - Maybe also have a toggle for list view


// <iframe title="all-tracks-map" src="https://www.google.com/maps/d/u/1/embed?mid=1n8YtuUk2AY4A5Or-SuBGbr9oHWN7Ds4&ehbc=2E312F" width="1280" height="840"></iframe>