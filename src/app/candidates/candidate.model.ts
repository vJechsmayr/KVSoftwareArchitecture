import { Interview } from "../shared/interview.model";

export class Candidate{
    public firstname: string;
    public lastname: string;
    public imagePath: string;
    public interviews: Interview[];
        
        constructor(firstname: string, lastname: string, imgPath: string, interviews: Interview[]){
            this.firstname = firstname;
            this.lastname = lastname;
            this.imagePath = imgPath;
            this.interviews = interviews;
        }
    }
    