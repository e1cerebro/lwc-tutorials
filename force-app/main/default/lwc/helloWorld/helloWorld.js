import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
	fullname = "Salesforce Fundamentals";
	title = "Aura"

	// @trackers 
	@track
	address = {
		city: 'London',
		postcode: 'N3R 3D4',
		country: 'Canada'
	}

	changeTitle(event){
		this.title = event.target.value;
	}
	
	changeCity(event){
		this.address = {...this.address, city: event.target.value};
	}

	// Getters
	num1 = 10;
	num2 = 20;
	get addNumbers(){
		return this.num1 + this.num2;
	}
}