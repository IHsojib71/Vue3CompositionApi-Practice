import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/IHsojib71/Vue3CompositionApi-Practice",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
})

export default {
    getEvents(perPage, currentPage) {
        return apiClient.get("/events?_limit="+perPage+"&page="+currentPage);
    },
    getEvent(id) {
        return apiClient.get("/events/"+id);
    },
    
}