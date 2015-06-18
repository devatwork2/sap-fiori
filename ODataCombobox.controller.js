sap.ui.controller("sap.ui.app.demoProject.view.Master", {
	
	onInit : function (evt) {
		var url = "proxy/http/<odata_url>/sap/opu/odata/sap/<odata_url_end>/";
		var oModel = new sap.ui.model.odata.ODataModel(url, true, "username", "password");
		this.getView().setModel(oModel);

		var myfilters = [];

		var FilterOperator = sap.ui.model.FilterOperator;
		var filter1 = new sap.ui.model.Filter("<field_name>", FilterOperator.EQ, "<filter_value>");
		myfilters.push(filter1);

		var mylist = this.getView().byId("<combo_box_variable_name>");
		var mybinding = mylist.getBinding("items");
		mybinding.filter(myfilters);
	}
});
