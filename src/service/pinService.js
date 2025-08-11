import axios from "axios";
import conf from "../conf/conf.js";

export class PinService {
    async getAllPins() {
        try {
            return await axios.get(`${conf.backendServiceUrl}/api/pin`)
        } catch (error) {
            console.error("Pin Service :: getAllPins :: error: ", error?.message)
            throw new Error("Error getting all pins:", error)
        }
    }

    async createPin({ title, description, pinImg }) {
        try {
            return await axios.post(`${conf.backendServiceUrl}/api/pin`, { title, description, pinImg }, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        } catch (error) {
            console.error("Pin Service :: createPin :: error: ", error?.message)
            throw new Error("Error creating pin:", error)
        }
    }

    async deletePin(id) {
        try {
            return await axios.delete(`${conf.backendServiceUrl}/api/pin/${id}`)
        } catch (error) {
            console.error("Pin Service :: deletePin :: error: ", error?.message)
            throw new Error("Error deleting pin:", error)
        }
    }
}

const pinService = new PinService();
export default pinService;