import { useState, useEffect } from 'react'


function TracksList() {
    useEffect(() => {
        const getTracks = async () => {
            const url = "http://ergast.com/api/f1/2022/circuits.json"
            const response = await fetch(url)
            const data =  await response.json()
            const tracksList = data.MRData.CircuitTable.Circuits
            const tracksLocation = []
            for(let i = 0; i < tracksList.length; i++){
                const name = tracksList[i].circuitId
                const capitalizeFirstLetter = (string) => {
                    return string.charAt(0).toUpperCase() + string.slice(1)
                }
                const upperCaseName = capitalizeFirstLetter(name)
                const styledName = upperCaseName.replace("_", " ")
                const styledNameTwo = styledName.replace("_", " ")

                tracksLocation.push({"lat": tracksList[i].Location.lat, "long": tracksList[i].Location.long, "name": styledNameTwo})
            }
            setTracksLoc(tracksLocation)
        }
        getTracks()
    }, [])


    return (
        <div>
            <iframe title="something?" src="https://www.google.com/maps/d/u/1/embed?mid=1n8YtuUk2AY4A5Or-SuBGbr9oHWN7Ds4&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
    )
};
