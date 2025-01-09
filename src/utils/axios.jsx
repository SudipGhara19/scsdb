import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Accept: "apllication/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTVkNWRlNjQ0N2NlNWM0ZDAwYjgwYTQxY2RjODI1MyIsIm5iZiI6MTczNjM1MzkwMS4yMjEsInN1YiI6IjY3N2VhODZkMzg4MWM3OTQxOWJiMTk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Nsw4evCluKZuV34Fte0MvTT2EsKIgUyz-R4XsBAjsU"
    }
});

export default instance;