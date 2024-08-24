import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAllblog = () => {
    const [isloading, setIsLoading] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get("/api/blog");
                setData(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, []);

    return { data, isloading, setData };
}
export const useGetAllProject = () => {
    const [isloading, setIsLoading] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(`/api/work`);
                setData(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, []);

    return { data, isloading, setData };
}