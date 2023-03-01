function triggerSubmission(){ 

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("telNumber").value;
    const contactPref = document.getElementById("contactPref").value;
    const expLevel = document.getElementById("expLevel").value;
    const query = document.getElementById("query").value;
    const courses = getCourseList();
   
    const data = {
        "name": name,
        "email": email,
        "tel": tel,
        "contactPref": contactPref,
        "expLevel": expLevel,
        "query": query,
        "courses": courses
    };

    console.log(data);

    document.getElementById("submitMessage").style.display = "block";

    

    function getCourseList(){
        let checkboxes= document.querySelectorAll('input[name="course"]:checked');
        let courses = [];
        checkboxes.forEach((checkbox) => {courses.push(checkbox.value)});
        return courses;
    }
}  