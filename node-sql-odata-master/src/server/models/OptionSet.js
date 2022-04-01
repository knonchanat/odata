import { Edm } from "odata-v4-server";

class OptionSet {
  @Edm.Key
  @Edm.String
  employee_id;

  @Edm.String
  user_name;

  @Edm.String
  user_password;

  @Edm.String
  first_name;

  @Edm.String
  last_name;

  @Edm.String
  position;

  @Edm.String
  company_id;

  @Edm.String
  department_id;

  @Edm.Int16
  status;

  @Edm.Date
  create_date;

  @Edm.String
  create_by;

  @Edm.Date
  update_date;

  @Edm.String
  update_by;
}

export default OptionSet;
