sap.ui.controller("sap.ui.demo.myFiori.view.Screen1", {

	onInit : function (evt){
		
	},

	handleSaveButtonPress: function (evt){
		this.nav.to("Screen2");
	}
});