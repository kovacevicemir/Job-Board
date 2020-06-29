import React from 'react'
import Typography from '@material-ui/core/Typography';


function Job({job}) {
    return (
        <div className='job'>
            {job.title}
            {job.company}
        </div>
    )
}

export default Job


