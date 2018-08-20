import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import $ from "jquery";

@Component({
  selector: 'page-dialer',
  templateUrl: 'dialer.html'
})
export class DialerPage {

  constructor(public navCtrl: NavController) {

  }

}

$(document).ready(function(){

	/*	Delete */
	$('.backspace').click(function(){
		let numbers =  $('.digits-display').text();
		let numbers2 =  $('.digits-display').text().length;
		$('.digits-display').text(numbers.substr(0,numbers2-1));
	});

	/*	Pusher	*/
	function display(digit: number): void {
    $(`.pushed${digit}`).click(function(){
      $('.digits-display').append(`${digit}`);
    });
  }

	display(1);
	display(2);
	display(3);
	display(4);
	display(5);
	display(6);
	display(7);
	display(8);
	display(9);
	display(0);

	$('.pushedstar').click(function(){
		$('.digits-display').append('*');
	});

	$('.pushedpound').click(function(){
		$('.digits-display').append('#');
	});
});
