jQuery.sap.declare("sap.ui.demo.myFiori.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.myFiori.view.App",
			type : "JS",
			viewData : { component : this }
		});

		// Using OData model to connect against a real service
		var url = "proxy/http/services.odata.org/Northwind/Northwind.svc";
		var oModel = new sap.ui.model.odata.ODataModel(url);
		oView.setModel(oModel);

		// done
		return oView;
	}
});