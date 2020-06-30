import React,{useState, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from "@material-ui/lab/Pagination";
import Job from "./Job";

// hellper for material ui
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));


function Jobs({ jobs }) {
  const classes = useStyles();

  const [TotalPages, setTotalPages] = useState(0)
  const [Page, setPage] = useState([])
  const [pageNo, setPageNo] = useState(0)
  
  const changePage = (e,page) =>{
    setPageNo(page)
  }
   
  useEffect(()=>{

      // Render 10 jobs per page
      setPage(jobs.slice(pageNo * 10 , (pageNo*10)+10 ))

      // Total number of pages
      let cc = Math.floor(jobs.length / 10);
      setTotalPages(cc)

  },[jobs, pageNo])


  
  return (
    <div className="jobs">
      <Typography variant="h4" component="h1">Entry Level Software Jobs</Typography>

      {
        Page.map((job) => <Job job={job} key={job.id} />)
      }

      <Typography>Page: {Page.currentPage}</Typography>
      <Pagination count={TotalPages} page={pageNo} onChange={changePage} />

    </div>


  );
}

export default Jobs;



  // //pagination
  // const CountTotalPages = () => {

  //   console.log(jobs)
    
  //   //page number
  //   let TotalPages = Math.floor(jobs.length / 30);
  //   const isReminder = jobs.length % 30
  //   if(isReminder > 0){
  //     TotalPages = TotalPages + 1
  //   }
  //   setTotalPages(TotalPages)

  //   //get 30 jobs for this page
  //   const newPageJobs = jobs.slice(currentPage * 30, (currentPage * 30) + 30);

  //   setPageJobs(newPageJobs)

  // }

  // const changePage = (event,page) => {
  //   setCurrentPage(page)

  //   const newPageJobs = jobs.slice(currentPage * 30, (currentPage * 30) + 30);
  //   setPageJobs(newPageJobs)

  //   console.log(newPageJobs)

  // }