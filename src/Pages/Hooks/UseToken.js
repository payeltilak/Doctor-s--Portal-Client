import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log('use inside useToken',user);
        const email = user?.user?.email;
        console.log(email);
        const currentUser = { email: email }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data inside useToken', data);
                    const accessToken = data.accessToken;
                    // console.log(accessToken);
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);

            })
        }
    }, [user]);
    return [token]
}

export default useToken;