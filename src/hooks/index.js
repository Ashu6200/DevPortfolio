import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

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

export const useSubmitBlog = () => {
    const [loading, setLoading] = useState(false);

    const submitBlog = async (title, description, highlight, imageBlog) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("highlights", JSON.stringify(highlight));
        formData.append("imageBlog", imageBlog);
        try {
            const res = await axios.post("/api/blog", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (res.status === 201) {
                toast.success("Blog successfully posted");
            } else {
                toast.error("Failed to post blog");
            }
        } catch (error) {
            console.error("Error posting blog", error);
            toast.error("An error occurred");
        } finally {
            setLoading(false);
        }
    }
    return { submitBlog, loading };
}
export const useSubmitProject = () => {
    const [loading, setLoading] = useState(false);

    const submitProject = async (title, description, keyPoints, projectImage, githubLink, liveLink, technologies, rating) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("keyPoints", JSON.stringify(keyPoints));
        formData.append("projectImage", projectImage);
        formData.append("githubLink", githubLink);
        formData.append("liveLink", liveLink);
        technologies.forEach((tech, index) => {
            formData.append(`technologies[${index}]`, tech);
        });
        formData.append("rating", rating);
        try {
            const res = await axios.post("/api/work", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (res.status === 201) {
                toast.success("Blog successfully posted");
            } else {
                toast.error("Failed to post blog");
            }
        } catch (error) {
            console.error("Error posting blog", error);
            toast.error("An error occurred");
        } finally {
            setLoading(false);
        }
    }
    return { submitProject, loading };
}