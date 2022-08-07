import React, { useState, useEffect } from "react";
import Searching from "./Component/Searching";

import Students from "./Component/Students";
import "./style.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [studentProfiles, setStudentProfiles] = useState([]);
  const [fullListStudents, setFullListStudents] = useState([]);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.hatchways.io/assessment/students"
      );
      const studentProfilesData = await response.json();
      setStudentProfiles(studentProfilesData.students);
      setFullListStudents(studentProfilesData.students);
      setLoading(false);
      
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const searchSubStringInArray =(stringArr,keyword) =>{
    for(let i = 0;i <stringArr.length;i++){
      if(stringArr[i].toLowerCase().includes(keyword.toLowerCase())){
        return true;
      }
    }
    return false;
  }

  const search = () => {
    const searchByNameKeyWord = document.getElementById("name_keyword").value;
    const searchByTagKeyWord = document.getElementById("tag_keyword").value;

    setStudentProfiles(fullListStudents);
    setStudentProfiles((student)=>{
      return student.filter((student)=>{
        if(searchByTagKeyWord.trim().length === 0){
          const fullname = (student.firstName + " " + student.lastName).toLowerCase();
          
          return fullname.includes(searchByNameKeyWord.toLowerCase());

        }else{
          if(student.tag == null){
            return false
          }else{
            const istagMatched = searchSubStringInArray(student.tag,searchByTagKeyWord);
            const isNameMatched = ((student.firstName + " " + student.lastName).toLowerCase()).includes(searchByNameKeyWord.toLowerCase());
            if(istagMatched && isNameMatched ){
              return true;
            }else{
              return false
            }
          }
        }
      })
    })
  }
  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Searching
          
          
          search={search}
        />
        <Students
          studentProfiles={studentProfiles}
          setStudentProfiles={setStudentProfiles}
          fullListStudents={fullListStudents}
          setFullListStudents={setFullListStudents}
        />
      </div>
    );
  }
}

export default App;
