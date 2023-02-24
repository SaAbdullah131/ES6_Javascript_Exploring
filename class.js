// syntactic sugar 

class Instructor {
    name;
    designation = "Web Instructor"
    team = 'web team'
    location;
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`);
    }
}