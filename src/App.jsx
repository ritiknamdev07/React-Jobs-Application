import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import { useEffect } from "react";
import { jobsData } from "./utility/data";


const App = () => {
  const saveJobs = (jobs) => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  };

  const getJobs = () => {
    return JSON.parse(localStorage.getItem("jobs")) || [];
  };
  console.log(getJobs());

  useEffect(() => {
    const data = getJobs();
    console.log(data);

    if (data.length === 0) {
      saveJobs(jobsData);
    }
  }, []);

  // add new job
  // const addJob = async (newJob) => {
  //   const res = await fetch("/api/jobs", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newJob),
  //   });
  //   return;
  // };

  const addJob = (job) => {
    const jobs = getJobs();

    jobs.push(job);
    saveJobs(jobs);
  };

  // delete job

  // const deleteJob = async (id) => {
  //   const res = await fetch(`/api/jobs/${id}`, {
  //     method: "DELETE",
  //   });
  // };
  const deleteJob = (id) => {
    const jobs = getJobs().filter((job) => job.id !== id);
    saveJobs(jobs);
  };

  // edit job

  const updateJob = async (job) => {
    const jobs = getJobs();
    const updatedJobs = jobs.map((item) => (item.id === job.id ? job : item));
    saveJobs(updatedJobs);
  };

  // const updateJob = async (job) => {
  //   const res = await fetch(`/api/jobs/${job.id}`,{
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(job),

  //   })
  // }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/add-jobs"
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
