import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController, NavController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;

  constructor(private toastCtrl: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then
    ((userData) => {

      console.log(userData);
      Message:'this is toast';
      //Navigate the user to the app page

      this.navCtrl.navigateForward(['/todos']);

    }).catch((err) => { 
      this.toastCtrl.create({
        message: err.message,
        duration: 8000
      }).catch((toast) => {
        toast.present();
      })

    })
  }

    gotoLogin(){

        this.navCtrl.back();
    }
}
