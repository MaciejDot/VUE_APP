import axios from 'axios';
import {baseUrls} from '../../config/config'
//services
const endpoints = {
    workout: '',
    workoutPlan: '',
    workoutSchedule:  '',
    fatigue: '',
    mood: '',
    exercise: '',
    article:'',
    articleThumbnail: '',
    post:'',
    subject:'',
    subjectThumbnail:'',
    thread:'',
    accountInfo:'',
    token:''
}
export class Service {
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    get(){}
}
