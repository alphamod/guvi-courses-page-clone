var func = function (courseName) {
    
    localStorage.setItem(courseName, courseName);
    var courseElem = localStorage.getItem(courseName);
    console.log(courseElem);
    // if () {
        
    // }
    var clonedElem=document.getElementById(courseElem).cloneNode(true);
    document.getElementById("my-course-content").appendChild(clonedElem);
};

