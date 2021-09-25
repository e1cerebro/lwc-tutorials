import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
	isVisible = false;
	students = [
		"Christian",
		"Adaeze",
		"Uchenna",
		"Joy",
		"Jennifer"
	]

	employees = [
		{
			id: 1,
			name: 'Brandon',
			age: 31
		},
		{
			id: 2,
			name: 'Abdul',
			age: 22
		},
		{
			id: 3,
			name: 'Christian',
			age: 31
		},
		{
			id: 4,
			name: 'Matt',
			age: 30
		}
	]

	toggleVisibility(event){
		this.isVisible = !this.isVisible;
	}
}