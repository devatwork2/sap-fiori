// author: devatwork2@gmail.com
// date: 24 dec 2014
// desc: Navigation to another page and destroying the view

sap.ui.controller("sap.ui.app.demoProject.view.Master", {
	
	handleNavButtonPress : function (evt) {
		this.nav.back("<previous_Page_Name>");
		
		this.getView().destroy();
	}
});
