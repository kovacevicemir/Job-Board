import React from 'react'
import Typography from '@material-ui/core/Typography';


function Job({job,onClick}) {

    return (
        <div className='job' onClick = {onClick}>
            <div>
                <Typography variant='h5'>{job.title}</Typography>
                <Typography variant='h6'>{job.company}</Typography>
                <Typography>{job.location}</Typography>
            </div>
            <div>
                <Typography>{job.created_at.split(' ').slice(0,3).join(' ')}</Typography>
            </div>
        </div>
    )
}

export default Job


