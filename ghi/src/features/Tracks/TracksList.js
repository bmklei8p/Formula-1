// import { useState, useEffect } from 'react'


function TracksList() {


    return (
        <div className="all-tracks-map">
            <br />
            <br />
            <br />
            <br />
            <iframe title="all-tracks-map" src="https://www.google.com/maps/d/u/1/embed?mid=1n8YtuUk2AY4A5Or-SuBGbr9oHWN7Ds4&ehbc=2E312F" width="1280" height="840"></iframe>
        </div>
    )
};

export default TracksList




// tried using the ergast api but getting a "readable stream" response - looked into a bit but do not fully understand how to resolve.
// will try to use another api to avoid this  --- Resolved by taking response.json() and awaiting that function

// need to have two maps: one of european only and one of worldwide. probably have state on this one page to determine which to show - Maybe also have a toggle for list view