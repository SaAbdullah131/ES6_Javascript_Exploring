// team member
class TeamMember {
    name;
    location;
    constructor(name,location){
        this.name= name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} Thanks for your feedback`);
    }
}


class Instructor extends TeamMember{
    designation='Web Instructor'
    team='web team'
    
    constructor(personName,personLocation){
        super(personName,personLocation);
    }
    starSupportSession(time){
        console.log(`Start the support Session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
   
}
// Developer feedback
class Developer extends TeamMember {
    
    designation='Web Instructor'
    team='web team'
    constructor(personName,personLocation,tech){
        super(personName,personLocation);
        this.whichTech=tech;
    }
    developeFeature(feature) {
        console.log(`Please develop the ${feature}`);
    }
    release(version) {
        console.log(`Please release the version ${version}`);
    }
    starSupportSession(time){
        console.log(`Start the support Session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
    
}

// Job Placement 
//prototripical inheritance in js 
class JobPlacement extends TeamMember {
    designation="Job Placement Commandos"
    team='job placement'
    constructor(name,location,region) {
        super(name,location);
        this.region=region;
    }
    provideResume(resume) {
        console.log(`Please provide resume to the recruitment officer ${resume}`);
    }
}

const alia = new Developer("Alia Bhatt","Dhaka","Node js");
console.log(alia);
alia.provideFeedback();
const bipasha = new JobPlacement("Bipasha",'kolkata','India');
console.log(bipasha);