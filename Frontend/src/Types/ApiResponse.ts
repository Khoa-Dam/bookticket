import { flights } from "./Book";

interface ApiResponse {
    EC: number;
    Message: string;
    Data: flights[];
}

export default ApiResponse;