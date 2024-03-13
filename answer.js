
//Question-01

const resumeData = {
    "Name": "Amar Dodda",
    "Email": "amardodda23@gmail.com",
    "Phone": "+918688062475",
    "Address": "Venkataramana colony, beside Canara Bank, Guntur, Andhra Pradesh, 522004",
    "Summary": "Experienced software engineer with expertise in web development and Database Management",
    "Education": [
      {
        "Degree": "Bachelor of Technology in Computer Science and Engineering",
        "University": "Vellore Institute of Technology",
        "Location": "Vellore, India",
        "Graduation_year": "2023"
      }
    ],
    "Experience": [
      {
        "position": "Software Engineering Intern",
        "company": "Honeywell",
        "location": "Bangalore, India",
        "start_date": "January 2023",
        "end_date": "June 2023",
        "responsibilities": [
          "Developed and maintained a UI appplication which enhanced the diagnostic activites and streamlined the maintenance of Azure IoT hub functionality"
        ]
      }
    ],
    "Skills": [
      "JavaScript",
      "React",
      "C#",
      "Java",
      "SQL",
      "HTML",
      "CSS"
    ],
    "Languages": [
      "English",
      "Telugu"
    ],
    "Certifications": [
      "AI cerification by NASSCOM",
      "SQL certification by Meta"
    ]
  };
  

  //Question-02

  //for

  for (let i = 0; i < Object.keys(resumeData).length; i++) {
    let key = Object.keys(resumeData)[i];
    if (Array.isArray(resumeData[key])) {
        console.log(key + ":");
        for (let j = 0; j < resumeData[key].length; j++) {
            console.log("- " + resumeData[key][j]);
        }
    } else {
        console.log(key + ": " + resumeData[key]);
    }
}

//for in

  for (let key in resumeData) {
    if (Array.isArray(resumeData[key])) {
        console.log(key + ":");
        for (let item of resumeData[key]) {
            console.log("- " + item);
        }
    } else {
        console.log(key + ": " + resumeData[key]);
    }
}

//for of

for (let [key, value] of Object.entries(resumeData)) {
    if (Array.isArray(value)) {
        console.log(key + ":");
        for (let item of value) {
            console.log("- " + item);
        }
    } else {
        console.log(key + ": " + value);
    }
}


// forEach

Object.keys(resumeData).forEach(key => {
    if (Array.isArray(resumeData[key])) {
        console.log(key + ":");
        resumeData[key].forEach(item => {
            console.log("- " + item);
        });
    } else {
        console.log(key + ": " + resumeData[key]);
    }
});


  