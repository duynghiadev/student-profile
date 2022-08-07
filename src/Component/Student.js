import React, { useState,useRef } from "react";
function Student({student,setFullListStudents,fullListStudents,setStudentProfiles}) {
    const [expand, setExpand] = useState(false);
    const inputRef= useRef();
    const average = (numArr) => {
        var sum = 0;
        for (let i = 0; i < numArr.length; i++) {
            sum += parseInt(numArr[i]);
        }

        return sum / numArr.length
    }
    const addTag = (e,id,tagName) =>{
        e.preventDefault();
        const newList = fullListStudents.map((student)=>{
            if(student.id === id){
                if(student.tag !== undefined){
                   
                    return{...student, tag:[...student.tag,tagName]}
                }
                else{
                    
                    return{...student, tag:[tagName]}
                }
                

            }else{
                return student
            }
        })
        console.log(newList);
        setFullListStudents(newList);
        setStudentProfiles(newList);
        inputRef.current.value="";
        
        
        
    }


    return (
        <main>
            <div  className="student_wrapper">
                <div className="student_img">
                    <img src={student.pic} alt="student_img" width="100px" height="100px" />
                </div>

                <div className="student_profile">
                    <div className="profile_heading">
                        <h1>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</h1>
                    </div>

                    <div className="profile_body">
                        <p>Email:{student.email}</p>
                        <p>Company:{student.company}</p>
                        <p>Skill:{student.skill}</p>
                        <p>Average: {average(student.grades)}%</p>
                        

                    </div>
                    <div>
                        {expand?  <div>{student.grades.map((grade,index)=>{
                            return(
                                <p key={index}>Test {index+1}:&nbsp;&nbsp;&nbsp; {grade}%</p>
                            )
                        })}</div>:''}
                    </div>
                    <div>{student.tag ? <div>{student.tag.map((tag,index)=>{
                            return(
                                <span key ={index}className="tag_name">{tag}</span>
                            )

                        })}</div>:""}</div>
                        <form className="tag_form" onSubmit={(e)=>{addTag(e,student.id,inputRef.current.value)}}>
                            <input className="tag_input" type="text" placeholder="Add a tag" ref={inputRef}/>
                        </form>

                </div>
                <div className="expand_btn">
                 
                    {expand? (<i className="fa-solid fa-minus" onClick={()=>{setExpand(!expand)}}></i>): (<i className="fa-solid fa-plus" onClick={()=>{setExpand(!expand)}}></i>)}
                </div>


            </div>





        </main>

    )
}
export default Student;