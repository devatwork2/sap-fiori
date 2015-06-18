// author: devatwork2@gmail.com
// date: 24 dec 2014
// desc: Getting oData field values

sap.ui.controller("sap.ui.app.demoProject.view.Master", {
	
	onInit : function (evt) {
		var url = "proxy/http/<odata_url>/sap/opu/odata/sap/<odata_url_end>/";
		var oModel = new sap.ui.model.odata.ODataModel(url, true, "username", "password");
		this.getView().setModel(oModel);
 
		var myfilters = [];
 
		var FilterOperator = sap.ui.model.FilterOperator;
		var filter1 = new sap.ui.model.Filter("<field_name>", FilterOperator.EQ, "<filter_value>");
		myfilters.push(filter1);
 
		var oBinding = oModel.bindList("/<entity_set_name>");
		oBinding.filter(myfilters);
 
		var handler = function (oEvent){
			oBinding.detachChange(handler);
 
			var SPath = "/" + oBinding.aKeys[0] + "/<field_name>";
			var fieldValue = oModel.getProperty(SPath);
		};
 
		oBinding.attachChange(handler);
		oBinding.getContexts();
	}
});
