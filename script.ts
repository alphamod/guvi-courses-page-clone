let func = (courseName: string) => {
    localStorage.setItem("courseNameSt", courseName);
    let a = localStorage.getItem("courseNameSt");    
    console.log(a);
}
(() => {
    
})();