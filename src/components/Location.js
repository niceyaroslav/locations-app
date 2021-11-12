import { React, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { updateLocation } from "../actions/locations";
import locationService from '../services/locationService';
import LocationForm from "../components/LocationForm";


const Location = () => {

    const initialLocationState = {

        name:"",
        address:"",
        city:"",
        assignedUsers:"",
        assignedVendors:"",
        assignedCustomers:"",
        subLocations:"",
        id: uuidv4()

    };

    const [ currentLocation, setCurrentLocation ] = useState(initialLocationState);
    const [resp, setResp] = useState(null)
    const { id } = useParams();

    const dispatch = useDispatch();
    const getLocation = id => {
        locationService.get(id)
            .then(response => {
                setCurrentLocation(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    };  

    useEffect(() => {
        getLocation(id);
        }, [id]);
    
    const handleInputChange = event => {
        const { name, value } = event.target;

        setCurrentLocation({ ...currentLocation, [name]: value });
        console.log(currentLocation);
    };

    const updateContent = () => {
        dispatch(updateLocation(id, currentLocation))
        .then(response => {
        setResp(response);
        console.log(response);
        })
        .catch(e => {
        console.log(e);
        });
    };
    console.log(currentLocation);
    return (
        <>
            <LocationForm edit={"edit"} handleInputChange={handleInputChange} updateContent={updateContent} 
            currentLocation={currentLocation} resp={resp} setResp={setResp}/>
        </>
    )
}

export default Location;