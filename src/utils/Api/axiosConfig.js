import axios from "axios";

const instance = axios.create({
    baseURL: 'http://54.196.36.161/'
});

export const questionsUrl = "api/v1/questions";
export const answersUrl = "api/v1/answers";

export default instance;