// author: devatwork2@gmail.com
// date: 24 dec 2014
// desc: Get and clear values from a combobox

sap.ui.controller("sap.ui.app.demoProject.view.Master", {
	
	handleGetCmbBoxValue : function (evt) {
		getCoreById = sap.ui.getCore().byId;
		
		var cmbBoxSelectedValue = getCoreById('Master--cmbBox').getSelectedKey();
	},
 
	handleClearCmbBoxValue : function (evt){
		getCoreById = sap.ui.getCore().byId;
		
		var cmbBoxSelectedValue = getCoreById('Master--cmbBox').setSelectedKey("");
	}
});
