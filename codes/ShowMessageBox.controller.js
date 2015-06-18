// author: devatwork2@gmail.com
// date: 24 dec 2014
// desc: Show message box for error or information

jQuery.sap.require("sap.m.MessageBox");
 
sap.ui.controller("sap.ui.app.demoProject.view.Master", {
	
	handleMessageBoxShow : function (evt) {
		sap.m.MessageBox.show(
			"Error message here", {
			 icon: sap.m.MessageBox.Icon.ERROR,
			 title: "Error",
			 actions: sap.m.MessageBox.Action.OK
			}
		);
 
		sap.m.MessageBox.show(
			"Informational message here", {
			 icon: sap.m.MessageBox.Icon.INFORMATION,
			 title: "Information",
			 actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
         onClose: function(oAction) { / * do something * / }
			}
		);
	}
});
