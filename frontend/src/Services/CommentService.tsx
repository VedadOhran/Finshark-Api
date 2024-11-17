import axios from "axios";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "./ErrorHandler";

const api = 'http://localhost:5299/api/comment/';

export const CommentPostAPI = async (title:string, content:string, symbol:string) => {
    try {
        const data = axios.post<CommentPost>(api + `${symbol}`, {
            title: title,
            content: content,
        })
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const CommentGetAPI= async (symbol:string) => {
    try {
        const data = axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error);
    }
}