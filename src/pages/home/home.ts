import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toppings = {};


  form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor(public navCtrl: NavController) {

  }

  submitSymptom(){
    console.log(this.form);
  }

  ionViewWillEnter(){
    this.form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
    console.log("this.for",this.form)
  }

  ionViewDidEnter(){
    this.form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
    console.log("this.for",this.form)
  }

  ionViewWillLoad(){
    this.form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
    console.log("this.for",this.form)
  }

  ionViewDidLoad(){
    this.form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
    console.log("this.for",this.form)
  }

  login(){
    console.log("asdads", this.form)
    document.getElementById("disNotf").style.display =  "block";
    document.getElementById("disNotfText").innerText =  "You have Cancer!";
  }

}
