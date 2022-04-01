import { ODataController, Edm, odata, ODataQuery } from "odata-v4-server";

import Login from "../models/Login";
import { convertResults, getConvertedValue } from "../utils/utils";

@odata.type(OptionSet)
class LoginController extends ODataController {
  /**
   * Get specific OptionSet by Id
   * @param {string} id
   */
  @odata.GET
  @odata.parameter("id", odata.key)
  async findOne(username,password) {
    let result = await global.connection
      .request()
      .query(`select top 1 
      e.employee_id,e.status,h.result,h.check_date,e.first_name,e.last_name,e.position,e.department_id,d.department_name,e.company_id,c.company_name,c.address
      from m_employee e
      left outer join m_company c on (e.company_id=c.company_id)
      left outer join m_department d on (e.department_id=d.department_id)
      left outer join t_atk_history h on (e.employee_id=h.employee_id)
      where e.user_name='${username}' and e.user_password='${password}'
      order by h.check_date desc`);

    return result.recordset;
  }
}