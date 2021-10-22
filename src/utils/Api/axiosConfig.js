import axios from "axios";

const instance = axios.create({
    baseURL: 'https://singlishwords.nus.edu.sg/'
});

export const questionsUrl = "api/v1/questions";
export const answersUrl = "api/v1/answers";

export default instance;