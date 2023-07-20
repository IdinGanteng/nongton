import axios from 'axios';


const url = "https://real-blue-blackbuck-garb.cyclic.app/user";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}
// export const addImage = async (image) => {
//     return await axios.post(url1,image);
// }
export const addUser = async (user) => {
    return await axios.post(url,user);
}
export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}