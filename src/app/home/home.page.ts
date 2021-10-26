import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight = 0;
  height = 0;
  bmi = 0;
 

    constructor(public toastController: ToastController) {}

    async calculateBMI() {
      this.bmi = Math.round(this.weight/ Math.pow((this.height/100), 2));
      // alert(this.bmi);

      let message="";
      let color= 'dark';

      if(this.bmi < 18){
        message= "You are Underweight";
        color= "danger";
      } else if ( this.bmi < 25){
        message= "You are Normal";
        color= "success";
      } else if ( this.bmi < 30){
        message= "You are Overweight";
        color= "warning";
      } else {
        message= "Please fill the correct height or weight";
        color= "danger";
      }

      const toast = await this.toastController.create({
        message: message,
        color: color, 
        duration: 2000
      });
      toast.present();
    }

    reset() {
      this.weight = 0;
      this.height =0;
      this.bmi = 0; 
    }

    
 

  
}
