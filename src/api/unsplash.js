import axios from "axios";

export default axios.create({
    baseURL : "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID LYXnuQZtnurIJsPU65XdMTEPoK-4EEwGJ6FK0vdhAiM"
    }
});