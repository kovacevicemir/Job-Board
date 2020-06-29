var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github')

// Calling it every minute, check crontab guru website for pattern...
var job = new CronJob('*/1 * * * *', fetchGithub, null, true, 'America/Los_Angeles');
job.start();