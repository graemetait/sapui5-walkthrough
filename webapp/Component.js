sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel",
  "sap/ui/demo/wt/controller/HelloDialog"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
  "use strict";
  return UIComponent.extend("sap.ui.demo.wt.Component", {
    metadata: {
      manifest: "json"
    },
    init : function () {
      // call the init function of the parent
      UIComponent.prototype.init.apply(this, arguments);

      var oData = {
        recipient: {
          name: "World"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);
      // set dialog
      this.helloDialog = new HelloDialog();

      var i18nModel = new ResourceModel({
        bundleName: "sap.ui.demo.wt.i18n.i18n"
      });
      this.setModel(i18nModel, "i18n");
    }
  });
});