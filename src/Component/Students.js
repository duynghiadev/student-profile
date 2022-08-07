import React from "react";
import Student from "./Student";

function Students({setFullListStudents,fullListStudents,setStudentProfiles,studentProfiles}) {
    
    return(
        <div>
            {studentProfiles.map((student)=>{
                return <Student student={student} key={student.id} setFullListStudents={setFullListStudents} fullListStudents={fullListStudents} setStudentProfiles={setStudentProfiles}/>
            })}
        </div>
    )
}
export default Students;