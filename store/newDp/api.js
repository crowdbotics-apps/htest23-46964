import axios from "axios"
import {
  CONNECTOR_NEW_DP_PASSWORD,
  CONNECTOR_NEW_DP_USERNAME
} from "react-native-dotenv"
const newDp = axios.create({
  baseURL: "https://devstringx.com",
  auth: {
    username: CONNECTOR_NEW_DP_PASSWORD,
    password: CONNECTOR_NEW_DP_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
