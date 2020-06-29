var fetch = require('node-fetch')

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub(){
    let resultCount = 1, onPage = 1

    const allJobs = []

    while(resultCount > 0){
        const res = await fetch(`${baseURL}?page=${onPage}`)
        const jobs = await res.json()

        console.log(jobs.length)

        resultCount = jobs.length
        allJobs.push(...jobs)
        onPage++
    }

    console.log(`we got: ${allJobs.length} in allJobs array`)

    
}

fetchGithub()

module.exports = fetchGithub