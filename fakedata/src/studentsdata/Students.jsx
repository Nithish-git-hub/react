import './Students.css';
const Students=()=>{
    const student_info= [
  {
    id: 1,
    name: "Aarav Mehta",
    collegeName: "IIT Bombay",
    email: "aarav.mehta@iitb.ac.in"
  },
  {
    id: 2,
    name: "Priya Sharma",
    collegeName: "Delhi University",
    email: "priya.sharma@du.ac.in"
  },
  {
    id: 3,
    name: "Rahul Verma",
    collegeName: "IIT Madras",
    email: "rahul.verma@iitm.ac.in"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    collegeName: "BITS Pilani",
    email: "sneha.gupta@bits-pilani.ac.in"
  },
  {
    id: 5,
    name: "Ankit Patel",
    collegeName: "NIT Trichy",
    email: "ankit.patel@nitt.edu"
  },
  {
    id: 6,
    name: "Kavya Reddy",
    collegeName: "Osmania University",
    email: "kavya.reddy@osmania.ac.in"
  },
  {
    id: 7,
    name: "Mohit Sinha",
    collegeName: "Jadavpur University",
    email: "mohit.sinha@jadavpur.edu"
  },
  {
    id: 8,
    name: "Ritika Das",
    collegeName: "VIT Vellore",
    email: "ritika.das@vit.ac.in"
  },
  {
    id: 9,
    name: "Deepak Yadav",
    collegeName: "IIT Kharagpur",
    email: "deepak.yadav@iitkgp.ac.in"
  },
  {
    id: 10,
    name: "Meera Nair",
    collegeName: "Amrita University",
    email: "meera.nair@amrita.edu"
  }
];
console.log(student_info)
return(
    <div className="students">
        {student_info.map((student,index)=>{
            return(
                <div className="studentstyling">
                    {/* <span>{student.id}</span> */}
                    <h1>{student.name}</h1>
                    <span>Mail:{student.email}</span>
                    <br />
                    <span>CollegeName:{student.collegeName}</span>
                </div>
                

            )

        })}
    </div>
)

}

export default Students;