import { Edm } from "odata-v4-server";

class employee {
  @Edm.Key
  @Edm.String
  employee_id;

  @Edm.String
  first_name;

  @Edm.String
  last_name;

  @Edm.Key
  @Edm.Date
  check_date;

  @Edm.Int16
  resuilt;

}

export default employee;
