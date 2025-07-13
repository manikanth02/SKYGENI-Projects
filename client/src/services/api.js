// This file fetches data from backend server.
// We have make like axios interceptor and move api call in services for better modularity ,readability

import axios from "axios"

const BASE_URL = "http://localhost:5050/api"

export const getCustomerType = () => axios.get(`${BASE_URL}/customer-type`)
export const getIndustryData = () => axios.get(`${BASE_URL}/account-industry`)
export const getTeamData = () => axios.get(`${BASE_URL}/team`)
export const getACVRangeData = () => axios.get(`${BASE_URL}/acv-range`)
