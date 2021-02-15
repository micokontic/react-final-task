const getCoordintesFromActivities=(activities)=>{
    
    return activities.map((activitie)=>{
        return {lat:activitie.lon,lng:activitie.lat}
    })

}

export default getCoordintesFromActivities;