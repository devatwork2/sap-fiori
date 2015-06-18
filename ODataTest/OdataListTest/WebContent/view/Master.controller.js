sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	onInit : function () {
		var url = "proxy/http/services.odata.org/Northwind/Northwind.svc";
		var oModel = new sap.ui.model.odata.ODataModel(url);
		this.getView().setModel(oModel); 
	},

	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	}

	/*onAfterRendering : function () {
		var input1 = this.getView().byId("input1");
		input1.setModel(oModel);

		var input2 = this.getView().byId("input2");
		var input3 = this.getView().byId("input3");
		input1.setValue("a");
		input2.setValue("b");
		input3.setValue("c");
	}*/
});