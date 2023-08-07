import { useState, useEffect } from "react";
import Redirect from "../components/redirect/Redirect";
import axios from "axios";

const baseUrl = "http://localhost:5050";
const profileUrl = `${baseUrl}/profile`;

function Profile() {
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const token = sessionStorage.getItem("JWTtoken");

        if (!token) {
            return;
        }

        axios
            .get(profileUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setIsLoading(false);
                console.log(response);
                setUserInfo({ name: response.data.name });
            });
    }, []);

    return isLoading ? <h1>Loading...</h1> : <Redirect userInfo={userInfo} />;
}

export default Profile;
