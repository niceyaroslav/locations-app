
import { React, useState } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { createLocation } from "../actions/locations";
import LocationForm from "../components/LocationForm";


const AddLocation = () => {
    
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

    const [newLocation, setNewLocation] = useState(initialLocationState);
    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch();
    
    const handleInputChange = event => {
        const { name, value } = event.target;

        setNewLocation({ ...newLocation, [name]: value });
        console.log(newLocation);
    };

    const saveLocation = () => {
        const { name, address, city, assignedCustomers, assignedVendors, assignedUsers, subLocations } = newLocation;

        dispatch(createLocation( name, address, city, assignedUsers, assignedCustomers, assignedVendors,  subLocations))
            .then(data => {
                setNewLocation({
                name: data.name,
                address: data.address,
                city: data.city,
                assignedCustomers: data.assignedCustomers,
                assignedVendors: data.assignedVendors,
                assignedUsers: data.assignedUsers,
                subLocations: data.subLocations
                });
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
        };
        const resetLocation = () => {
            setNewLocation(initialLocationState);
          };

    return (
        <>
           <LocationForm handleInputChange={handleInputChange} saveLocation={saveLocation} 
           currentLocation={newLocation} resetLocation={resetLocation} edit={null} resp={submitted} setSubmitted={setSubmitted}/>
        </>
    )
}

export default AddLocation;