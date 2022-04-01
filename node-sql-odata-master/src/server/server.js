const { odata, ODataServer } = require("odata-v4-server");


import OptionSetController from "./controller/OptionSetController";
import LoginController from "./controller/LoginController";
import employeeController from "./controller/employeeController";
import histoycompanyController from "./controller/historycompanyController";
import histoyemployeeController from "./controller/historyemployeeController";

@odata.namespace("My")
@odata.controller(LoginController, true)
@odata.controller(OptionSetController, true)
@odata.controller(employeeController, true)
@odata.controller(historyemployeeController, true)
@odata.controller(historycompanyController, true)


class MyODataServer extends ODataServer {}

export default MyODataServer;
