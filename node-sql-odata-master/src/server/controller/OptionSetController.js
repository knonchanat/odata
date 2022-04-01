import { ODataController, Edm, odata, ODataQuery } from "odata-v4-server";

import OptionSet from "../models/OptionSet";
import { convertResults, getConvertedValue } from "../utils/utils";

@odata.type(OptionSet)
class OptionSetController extends ODataController {
  /**
   * Get All OptionSet
   */
  @odata.GET
  async find() {
    let result = await global.connection
      .request()
      .query("SELECT * FROM [dbo].[m_employee]");

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
      .query(`SELECT * FROM [dbo].[m_employee] WHERE employee_id = '${id}'`);

    return result.recordset;
  }

  /**
   * Create a new OptionSet
   * @param {string} body
   */
  @odata.POST
  @odata.parameter("body", odata.body)
  async insert(body) {
    const columns = Object.keys(body);
    const values = Object.keys(body).map((key) => getConvertedValue(body[key]));
    let result = await global.connection
      .request()
      .query(
        `INSERT INTO m_employee (${columns.join(
          ", "
        )}) OUTPUT inserted.* VALUES (${values.join(", ")});`
      );

    return result.recordset[0];
  }

  /**
   * Modify the specific OptionSet with the data from the payload by Unique Id
   * @param {string} id
   * @param {object} body
   */
  @odata.PATCH
  @odata.parameter("id", odata.key)
  @odata.parameter("body", odata.body)
  async update(id, body) {
    const sets = Object.keys(body).map(
      (key) => key + "=" + getConvertedValue(body[key])
    );
    const result = await global.connection
      .request()
      .query(`UPDATE m_employee SET ${sets.join(", ")} WHERE employee_id = '${id}'`);

    return result.recordset;
  }

  /**
   * Update the specific OptionSet with the data from the payload by Unique Id
   * @param {string} id
   * @param {*} data
   * @param {*} context
   */
  @odata.PUT
  @odata.parameter("id", odata.key)
  @odata.parameter("body", odata.body)
  async upsert(id, body) {
    const product = Object.assign({}, body, { Id: id });
    const columns = Object.keys(product);
    const insertedColumns = Object.keys(product).map(
      (key) => "inserted." + key
    );
    const values = Object.keys(product).map((key) =>
      getConvertedValue(product[key])
    );
    const sqlCommand = `
        DELETE FROM m_employee OUTPUT deleted.* WHERE employee_id = '${id}';
        INSERT INTO m_employee (${columns.join(
          ", "
        )}) OUTPUT ${insertedColumns.join(", ")} VALUES (${values.join(", ")});
        `;
    const result = await global.connection.request().query(sqlCommand);
    return result.recordset[0];
  }

  /**
   * Delete the specific OptionSet by UniqueId
   * @param {string} id
   */
  @odata.DELETE
  @odata.parameter("id", odata.key)
  async remove(id) {
    let result = await global.connection
      .request()
      .query(`DELETE FROM m_employee OUTPUT deleted.* WHERE employee_id = '${id}'`);

    return result.recordset;
  }
}

export default OptionSetController;
