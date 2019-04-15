import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toppings = {};

  diseases_list = ["pneumonia","failure_heart_congestive","dementia","dehydration"]
form = [];

symptoms_list_temp = ["cough"," fever"," shortness_of_breath"," rhonchus"," green_sputum","distress respiratory"," night sweat]","[fatigue","hypotension"," shortness_of_breath","cough"," wheezing"," jugular_venous_distention]","[fever"," unresponsiveness","lethargy","unconscious_state","bedridden","abdominal_tenderness"," hallucinations_auditory","rhonchus]","[fever","diarrhea","vomiting","nausea","lightheadedness","sensory_discomfort","lethargy","dizziness","hypotension"]
;

symptoms_list = [
    { val: 'cough', isChecked:false},
    { val: 'fever', isChecked:false},
    { val: 'shortness_of_breath', isChecked:false},
    { val: 'rhonchus', isChecked:false},
    { val: 'green_sputum', isChecked:false},
    { val: 'distress respiratory', isChecked:false},
    { val: 'night sweat', isChecked:false},
    { val: 'fatigue', isChecked:false},
    { val: 'hypotension', isChecked:false},
    { val: 'shortness_of_breath', isChecked:false},
    { val: 'cough', isChecked:false},
    { val: 'wheezing', isChecked:false},
    { val: 'jugular_venous_distention', isChecked:false},
    { val: 'fever', isChecked:false},
    { val: 'unresponsiveness', isChecked:false},
    { val: 'lethargy', isChecked:false},
    { val: 'unconscious_state', isChecked:false},
    { val: 'bedridden', isChecked:false},
    { val: 'abdominal_tenderness', isChecked:false},
    { val: 'hallucinations_auditory', isChecked:false},
    { val: 'rhonchus]', isChecked:false},
    { val: 'fever', isChecked:false},
    { val: 'diarrhea', isChecked:false},
    { val: 'vomiting', isChecked:false},
    { val: 'nausea', isChecked:false},
    { val: 'lightheadedness', isChecked:false},
    { val: 'sensory_discomfort', isChecked:false},
    { val: 'lethargy', isChecked:false},
    { val: 'dizziness', isChecked:false},
    { val: 'hypotension', isChecked:false}
  ];

  disea_symptoms = [
    ["cough"," fever"," shortness_of_breath"," rhonchus"," green_sputum","distress respiratory"," night sweat"],["fatigue","hypotension"," shortness_of_breath","cough"," wheezing"," jugular_venous_distention"],["fever"," unresponsiveness","lethargy","unconscious_state","bedridden","abdominal_tenderness"," hallucinations_auditory","rhonchus"],["fever","diarrhea","vomiting","nausea","lightheadedness","sensory_discomfort","lethargy","dizziness","hypotension"]
  ]

  constructor(public navCtrl: NavController) {

  }

  submitSymptom(){
    console.log(this.symptoms_list);
    this.form =this.symptoms_list_temp;
    console.log("from", this.form)
    var disScore = [0,0,0,0]
    for (var dis=0; dis<this.diseases_list.length; dis++){
      for (var sym=0; sym<this.disea_symptoms[dis].length; sym++){
        if(this.symptoms_list_temp.indexOf(this.disea_symptoms[dis][sym])>-1){
          disScore[dis] +=1; 
        }
      }
    }
    console.log("---dis", disScore)

  }

  ionViewWillEnter(){
    this.form =this.symptoms_list;
    console.log("this.for",this.form)
  }

  ionViewDidEnter(){
    this.form =this.symptoms_list;
    console.log("this.for",this.form)
  }

  ionViewWillLoad(){
    this.form =this.symptoms_list;
    console.log("this.for",this.form)
  }

  ionViewDidLoad(){
    this.form =this.symptoms_list;
    console.log("this.for",this.form)
  }

  login(){
    

    console.log(this.symptoms_list);
    
    console.log("from", this.form)
    var disScore = [0,0,0,0]
    for (var dis=0; dis<this.diseases_list.length; dis++){
      for (var sym=0; sym<this.disea_symptoms[dis].length; sym++){
        if(this.symptoms_list_temp.indexOf(this.disea_symptoms[dis][sym])>-1){
          disScore[dis] +=1; 
        }
      }
    }
    console.log("---dis", disScore)
    this.form =this.symptoms_list_temp;
    var disName = this.diseases_list[this.indexOfMax(disScore)]

    document.getElementById("disNotf").style.display =  "block";
    document.getElementById("disNotfText").innerText =  "You have "+disName+"!";
  }

  indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

}
