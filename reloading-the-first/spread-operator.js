//nested spread

const data = ["Spin","Template","Squad","Think",...["Belive", "Confidence", "Knowledge", ...["Promotion", "Helpfulness", "Expression", ...["Condition","Repetative"]]] ]

console.log(data)

const students = ["Mohsin","Fahim","Jhalak","Sima","Shirsho"]

var rankedStudents = {
    firstBoy : students[0],
    secondBoy : students[1],
    others: [[[...students]]]
}

console.log(rankedStudents.others)

let areYouInInternship = true;
areYouInInternship = true

console.log(areYouInInternship ? "Going to IIT is very rare": "Going to IIT is very common");