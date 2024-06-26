import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../AppProvider';



function ProfilePage() {
    const { userData, setRefreshNewProfilePage } = useContext(AppContext)
    const navigate = useNavigate()


    let handleProfileEditButtonCLick = () => {
        setRefreshNewProfilePage(false)
        navigate('/')
    }

    let activitiesInputs = () => {
        if (userData.userActivities) {
            const checkedActivities = userData.userActivities.filter(activity => activity.checked)
            return (checkedActivities.map(activity => {
                return (
                    <li key={activity.text}>
                        {activity.text}
                    </li>)
            }))
        }
    }

    return (
        <div>
            <h3>Imię: {userData.firstName}</h3>
            <h3>Nazwisko: {userData.lastName}</h3>
            <h4>Miejsce: {userData.place}</h4>
            <h4>Płeć: {userData.gender}</h4>
            <h4>Twoje aktywności:</h4>
            <ul>
                {activitiesInputs()}
            </ul>
            <button onClick={handleProfileEditButtonCLick}>Edytuj profil</button>
        </div>
    );
}

export default ProfilePage;