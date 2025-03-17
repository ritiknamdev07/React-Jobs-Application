import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setJobs(data);
  //     } catch (error) {
  //       alert("error fetching data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchJobs();
  // }, []);

  const getJobs = () => {
    return JSON.parse(localStorage.getItem("jobs")) || [];
  };
  useEffect(() => {
    const data = getJobs();
    console.log(data.slice(0,4));
    
    if(isHome){
      setJobs(data.slice(0,4))
    }else {
      setJobs(data)
    }
    
  }, []);


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}{" "}
          </div>
        )}
      </div>
    </section>
  );
};
export default JobListings;
