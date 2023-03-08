import { useState, useEffect, useCallback } from 'react';
import useGetBaseURL from '../../../hooks/useGetBaseURL';
import { Job } from '../types';

const useGetJobs = () => {
    const [jobs, setJobs] = useState<Job[]>([])
    const baseURL = useGetBaseURL();

    const fetchJobs = useCallback(() => {
        fetch(baseURL + "/jobs")
        .then(res => res.json())
        .then(res => setJobs(res.jobs));
    }, [baseURL]) 

    useEffect(() => {

        fetchJobs();

    }, [fetchJobs])
    
    return {jobs, fetchJobs};
};

export default useGetJobs;
