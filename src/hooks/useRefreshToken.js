import axios from "axios"

const useRefreshToken = () => {
  const refresh = async ()=> {
    const response = await axios.get('https://localhost:8000/api/user/refresh-token', {withCredentials: true})
    return response.data?.accessToken
  }
  return refresh
}

export default useRefreshToken
