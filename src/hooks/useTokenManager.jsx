import { jwtVerify } from 'jose';
import { useState } from 'react';

export const useTokenManager = () => {

    const [ loading, setLoading] = useState(false);
    const secret = new TextEncoder().encode('labeddit-fullstack')
    
    const getPayload = async (token) => {
        try {
            setLoading(true)
            const { payload } = await jwtVerify(token, secret)
            setLoading(false);
            return payload
          } catch (e) {
            setLoading(false);
            return "Token is invalid"
          }
      }

    return { getPayload, loading } 
}