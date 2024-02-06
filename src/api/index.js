import axios from 'axios' 
// import { clearCookie } from './Auth'
const axiosSecure = axios.create({
    baseURL: 'https://hotelbookingserver.vercel.app/',
   withCredentials: true
})
//  https://hotelbookingserver.vercel.app/ http://localhost:5000/
// intercept response and check for unauthorized responses.
// axiosSecure.interceptors.response.use(
//     response => response,
//     async error => {
//       console.log('Error tracked in the interceptor', error.response)
//       if (
//         error.response &&
//         (error.response.status === 401 || error.response.status === 403)
//       ) {
//         await clearCookie()
//         window.location.replace('/login')
//       }
  
//       return Promise.reject(error)
//     }
//   )
export default axiosSecure 