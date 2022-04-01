import { ODataController, Edm, odata, ODataQuery } from "odata-v4-server";

import employee from "../models/employee";
import { convertResults, getConvertedValue } from "../utils/utils";

@odata.type(OptionSet)
class employeeController extends ODataController {
  /**
   * Get All OptionSet
   */
  @odata.GET
  async find() {
    let result = await global.connection
      .request()
      .query("select e.employee_id,e.first_name,e.last_name,h.check_date,h.result from m_employee e left outer join m_company c on (e.company_id=c.company_id) left outer join t_atk_history h on (e.employee_id=h.employee_id) ORDER BY check_date DESC");

    return result.recordset;
  }

  /**
   * Get specific OptionSet by Id
   * @param {string} id
   */
  @odata.GET
  @odata.parameter("id", odata.key)
  async findOne(id) {
    let result = await global.connection
      .request()
      .query(`select 
      e.employee_id,e.first_name,e.last_name,h.check_date,h.result
      from m_employee e
      left outer join m_company c on (e.company_id=c.company_id)
      left outer join t_atk_history h on (e.employee_id=h.employee_id)
      where e.company_id = '${id}' ORDER BY check_date DESC`);

    return result.recordset;
  }
}