/* eslint-disable prettier/prettier */
import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/Urmatawil/data",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "content-type": "application/json",
    },
});

export default {
    //obtener todos los eventos
    getEvents() {
        return apiClient.get('/events')
    },
    //obtener un solo evento
    getEvent(id) {
        return apiClient.get(`/events/${id}`)
    }
}