import axios from "axios";

const BACKEND_URL = 'https://localhost:8080';

export const api = axios.create({ url: BACKEND_URL });

