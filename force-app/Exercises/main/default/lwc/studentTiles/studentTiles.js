import { LightningElement, api } from "lwc";

export default class StudentTiles extends LightningElement {
	@api studentList = [];
	selectedStudentId = "";
	@api setSelectedStudent(studentId) {
		this.selectedStudentId = studentId;
	}
	@api setSelectedRecord(recordId) {
		const mySelector = `tr[data-pk='${recordId}']`;
		const selectedRow = this.template.querySelector(mySelector);
		if (selectedRow) {
			this.highlightSelectedRow(selectedRow);
		}
	}
	handleStudentSelected(event) {
		this.selectedStudentId = event.detail.studentId;
	}
}
