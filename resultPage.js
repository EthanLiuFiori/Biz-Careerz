

let jobs = [
    { name: 'Accountant', code: '11000001010000001000', first: 'Financial Analysis', second: 'Problem Solving', third: 'Communication' },
    { name: 'Auditor', code: '11100000001000001000', first: 'Financial Analysis', second: 'Problem Solving', third: 'Communication' },
    { name: 'Financial Analyst', code: '11100001001000001000', first: 'Financial Analysis', second: 'Problem Solving', third: 'Decision Making' },
    { name: 'Investment Banker', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Management Consultant', code: '00011001001000000010', first: 'Problem Solving', second: 'Leadership', third: 'Communication' },
    { name: 'Marketing Manager', code: '00001001001000010010', first: 'Marketing', second: 'Leadership', third: 'Communication' },
    { name: 'Sales Manager', code: '00001001001000000011', first: 'Communication', second: 'Leadership', third: 'Management' },
    { name: 'Supply Chain Manager', code: '00001001001000000011', first: 'Problem Solving', second: 'Leadership', third: 'Management' },
    { name: 'Project Manager', code: '00000001001100000011', first: 'Leadership', second: 'Management', third: 'Communication' },
    { name: 'Business Analyst', code: '00011001001000000010', first: 'Problem Solving', second: 'Leadership', third: 'Communication' },
    { name: 'Entrepreneur', code: '00000001001100000011', first: 'Leadership', second: 'Management', third: 'Communication' },
    { name: 'Real Estate Agent', code: '00000000001000000011', first: 'Communication', second: 'Decision Making', third: 'Problem Solving' },
    { name: 'Insurance Broker', code: '00000000001000001011', first: 'Communication', second: 'Problem Solving', third: 'Decision Making' },
    { name: 'Risk Manager', code: '00100001001000001011', first: 'Financial Analysis', second: 'Problem Solving', third: 'Communication' },
    { name: 'Tax Advisor', code: '11000000001000001000', first: 'Financial Analysis', second: 'Problem Solving', third: 'Communication' },
    { name: 'Market Research Analyst', code: '00000001001100100011', first: 'Financial Analysis', second: 'Marketing', third: 'Communication' },
    { name: 'Advertising Manager', code: '00001001001000010010', first: 'Marketing', second: 'Leadership', third: 'Communication' },
    { name: 'E-commerce Manager', code: '00000001001001000011', first: 'Problem Solving', second: 'Leadership', third: 'Communication' },
    { name: 'Product Manager', code: '00000001001100000011', first: 'Leadership', second: 'Management', third: 'Communication' },
    { name: 'Business Development Manager', code: '00000001001000000011', first: 'Leadership', second: 'Communication', third: 'Decision Making' },
    { name: 'Franchise Owner', code: '00000000001000000011', first: 'Leadership', second: 'Management', third: 'Communication' },
    { name: 'Business Manager', code: '00000001001000000011', first: 'Leadership', second: 'Management', third: 'Communication' },
    { name: 'Sales Representative', code: '00000000001000000011', first: 'Communication', second: 'Decision Making', third: 'Problem Solving' },
    { name: 'Economist', code: '10100001001000001010', first: 'Financial Analysis', second: 'Problem Solving', third: 'Communication' },
    { name: 'Business Intelligence Analyst', code: '00010001001000000010', first: 'Problem Solving', second: 'Leadership', third: 'Communication' },
    { name: 'Digital Marketing Specialist', code: '00001001001000010011', first: 'Marketing', second: 'Communication', third: 'Problem Solving' },
    { name: 'Purchasing Manager', code: '00001001001000000011', first: 'Problem Solving', second: 'Leadership', third: 'Management' },
    { name: 'Inventory Manager', code: '00001001001000000011', first: 'Problem Solving', second: 'Leadership', third: 'Management' },
    { name: 'Import Export Specialist', code: '00001001001000000011', first: 'Problem Solving', second: 'Leadership', third: 'Management' },
    { name: 'Business Process Manager', code: '00011001001000000010', first: 'Problem Solving', second: 'Leadership', third: 'Communication' },
    { name: 'Chief Financial Officer', code: '11000001001000001000', first: 'Financial Analysis', second: 'Problem Solving', third: 'Communication' },
    { name: 'Investment Advisor', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Wealth Manager', code: '11000001001000001010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Pension Fund Manager', code: '11000001001000001010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Hedge Fund Manager', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication'},
    { name: 'Equity Analyst', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Venture Capitalist', code: '11000001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Leadership' },
    { name: 'Private Equity Analyst', code: '11000001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Commercial Banker', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Corporate Finance', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Business Operations Specialist', code: '00000001001100000011', first: 'Leadership', second: 'Management', third: 'Communication' },
    { name: 'International Business Specialist', code: '00000001001000000011', first: 'Leadership', second: 'Communication', third: 'Decision Making' },
    { name: 'Business Systems Analyst', code: '00011001001000000010', first: 'Problem Solving', second: 'Leadership', third: 'Communication' },
    { name: 'Economic Development Specialist', code: '00011001001000000010', first: 'Problem Solving', second: 'Leadership', third: 'Communication' },
    { name: 'Financial Reporting Manager', code: '11000001001000000010', first: 'Financial Analysis', second: 'Communication', third: 'Problem Solving' },
    { name: 'Credit Manager', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Equity Trader', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Financial Advisor', code: '11000001001000001010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Financial Consultant', code: '11100001001000001000', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Investment Consultant', code: '11000001001000001010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Management Analyst', code: '00011001001000000010', first: 'Problem Solving', second: 'Leadership', third: 'Communication' },
    { name: 'Market Development Manager', code: '00001001001000000011', first: 'Marketing', second: 'Leadership', third: 'Communication' },
    { name: 'Operations Director', code: '00000001001100000011', first: 'Leadership', second: 'Management', third: 'Communication' },
    { name: 'Product Marketing Manager', code: '00001001001000000101', first: 'Marketing', second: 'Leadership', third: 'Communication' },
    { name: 'Revenue Manager', code: '00000001001000000011', first: 'Leadership', second: 'Management', third: 'Communication' },
    { name: 'Risk Analyst', code: '10100001001000001010', first: 'Financial Analysis', second: 'Problem Solving', third: 'Communication' },
    { name: 'Sales Analyst', code: '00000001001000000010', first: 'Financial Analysis', second: 'Communication', third: 'Problem Solving' },
    { name: 'Securities Analyst', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Stockbroker', code: '11100001001000000010', first: 'Financial Analysis', second: 'Decision Making', third: 'Communication' },
    { name: 'Supply Chain Director', code: '00001001001000000011', first: 'Problem Solving', second: 'Leadership', third: 'Management' }
];
let questions = ['Financial Analysis', 'Financial Analysis', 'Decision Making', 'Problem Solving', 'Marketing', 'Leadership', 'Problem Solving', 'Management', 'Financial Analysis', 'Management', 'Communication', 'Communication', 'Financial Analysis', 'Communication', 'Financial Analysis', 'Marketing', 'Management', 'Management', 'Communication', 'Leadership'];
let order = sessionStorage.getItem('order');

let userID = sessionStorage.getItem('temp'); // Make sure userID is a string
console.log(userID, order)
// Function to calculate compatibility for a single job
function calculateCompatibility(job, userID, questions) {
    let compatibility = 0;
    for (let i = 0; i < userID.length; i++) {
        if (userID[i] === job.code[i]) {
            compatibility += 8;
            if (userID[i] === '1') { // Note: userID[i] is a string character, so use '1'
                if (questions[i] === job.first) {
                    compatibility += 8;
                } else if (questions[i] === job.second) {
                    compatibility += 6;
                } else if (questions[i] === job.third) {
                    compatibility += 4;
                }
            }



        } else if (userID[i] === '2'){
            compatibility +=4
            if (questions[i] === job.first) {
                    compatibility += 4;
                } else if (questions[i] === job.second) {
                    compatibility += 2;
                } else if (questions[i] === job.third) {
                    compatibility += 1;
                }
        }
        for (let k=0; k<order.length; k++){
            if (userID[i] === order[k]){
                compatibility += k

            }
        
        }
    }
    return compatibility;
}

let results = [];
for (let j = 0; j < jobs.length; j++) {
    let compatibility = calculateCompatibility(jobs[j], userID, questions);
    results.push({ job: jobs[j].name, compatibility: compatibility });
}

// Sort results by compatibility in descending order
results.sort((a, b) => b.compatibility - a.compatibility);
console.log(results)





let resultsContainer = document.getElementById('results');


resultsContainer.innerHTML = ''; // Clear any existing content
eigthComp = results[7] ? results[7].compatibility : 0;
let tempJobs = results.slice(0, 8);
for (let i = 8; i < jobs.length; i++) {
    if (results[i].compatibility != eigthComp) {
        tempJobs = results.slice(0, i);
        break
    }
}

tempJobs.forEach(job => {
    let jobElement = document.createElement('button');
    jobElement.classList.add('job');
    jobElement.textContent = `Job: ${job.job}, Compatibility: ${job.compatibility}`;
    jobElement.onclick = () => handleJobClick(job);
    resultsContainer.appendChild(jobElement);
});





function handleJobClick(job) {
    window.location.href =`Jobs Pages/${job.job}.html`
}

function openNewTab(){
    window.location.href="OpportunitiesSubFolder/Opportunities.html";
}
