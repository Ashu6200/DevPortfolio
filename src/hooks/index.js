import axios from "axios";
import { useCallback, useEffect, useState } from "react";

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
export const useGetAllSuggestion = () => {
    const [isloading, setIsLoading] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(`/api/suggestion`);
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

export const useGetSingleProject = (id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        if (!id) return;
        try {
            setLoading(true);
            setError(null);
            const projectData = await axios.get(`/api/work/${id}`);
            if (projectData) {
                setData(projectData.data);
            } else {
                setError(projectData?.message || 'Unexpected error occurred');
            }
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, error, loading, refetch: fetchData };
};
export const useGetSingleBlog = (id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        if (!id) return;
        try {
            setLoading(true);
            setError(null);
            const projectData = await axios.get(`/api/blog/${id}`);
            if (projectData) {
                setData(projectData.data);
            } else {
                setError(projectData?.message || 'Unexpected error occurred');
            }
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, error, loading, refetch: fetchData };
};
