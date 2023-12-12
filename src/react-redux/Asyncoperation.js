import { fetchUsersFailure,fetchUsersRequest,fetchUsersSuccess } from "./Actions"

const Asyncoperation = () => {
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>dispatch(fetchUsersSuccess(data)))
        .catch(error=>dispatch(fetchUsersFailure(error)))
    }
  
}
export {Asyncoperation} 