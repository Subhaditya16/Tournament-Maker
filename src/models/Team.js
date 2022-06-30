import {v4 as uuidv4} from'uuid';

class Team {
    constructor(name, img_url){
        this.id=uuidv4()
        this.name=name
        this.img_url=img_url
    }
}

export default Team;