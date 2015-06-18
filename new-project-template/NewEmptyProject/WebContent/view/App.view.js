sap.ui.jsview("sap.ui.demo.myFiori.view.App", {

	getControllerName: function () {
		return "sap.ui.demo.myFiori.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App();
		
		var screen1 = sap.ui.xmlview("Screen1", "sap.ui.demo.myFiori.view.Screen1");
		screen1.getController().nav = this.getController();
		this.app.addPage(screen1, true);

		var screen2 = sap.ui.xmlview("Screen2", "sap.ui.demo.myFiori.view.Screen2");
		screen2.getController().nav = this.getController();
		this.app.addPage(screen2, false);
		
		// done
		return this.app;
	}
});