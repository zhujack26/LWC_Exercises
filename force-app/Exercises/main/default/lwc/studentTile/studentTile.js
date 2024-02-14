import { LightningElement, api } from "lwc";

export default class StudentTile extends LightningElement {
	@api student = {
		Name: "[Juseung Park]",
		PhotoUrl: "/services/images/photo/003B0FakePictId"
	};
	get tileSelected() {
		return this.selectedStudentId === this.student.Id ? "tile selected" : "tile";
	}
	studentClick() {
		// alert(this.student.Name);
		/* debugger;
        console.log('Name', this.student.Name);
        console.log('Photo', this.student.PhotoUrl); */
		const evt = new CustomEvent("studentselected", {
			detail: { studentId: this.student.Id }
		});
		this.dispatchEvent(evt);
	}
	@api selectedStudentId = "";
}
