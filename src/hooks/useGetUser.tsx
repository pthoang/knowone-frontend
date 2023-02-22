import { useState, useEffect } from 'react';

const useGetUser = () => {
    const [user, setUser] = useState<string | null>(null)

    const localUserId = localStorage.getItem("userID")

    useEffect(() => setUser(localUserId), [localUserId])

    return [user]
}

export default useGetUser;
