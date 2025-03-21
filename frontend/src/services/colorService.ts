import axios from "axios";
import { IColor } from "../models/Color";
import { toast } from "react-toastify";


const api = axios.create({
    baseURL: "http://localhost:5001/api/colors",
    headers: { "Content-Type": "application/json" },
});

const handleRequest = async <T>(request: Promise<{ data: T }>, successMessage?: string) => {
    try {
        const response = await request;
        if (successMessage) toast.success(successMessage);
        return response.data;
    } catch (error: any) {
        toast.error(error.response?.data?.message || "Something went wrong");
        throw error;
    }
};


export const getColors = () => handleRequest<IColor[]>(api.get("/"));
export const addColor = (color: { name: string; hex: string }) => handleRequest<IColor>(api.post("/", color), "Color added successfully!");
export const updateColor = (id: string, color: { name: string; hex: string }) => handleRequest<IColor>(api.put(`/${id}`, color), "Color updated successfully!");
export const deleteColor = (id: string) => handleRequest(api.delete(`/${id}`), "Color deleted successfully!");
