import { Edm } from "odata-v4-server";

class Login {
  @Edm.Key
  @Edm.String
  employee_id;

  @Edm.Int16
  status;

  @Edm.Int16
  result;

  @Edm.Key
  @Edm.Date
  check_date;

  @Edm.String
  first_name;

  @Edm.String
  last_name;

  @Edm.String
  position;

  @Edm.String
  department_id;

  @Edm.String
  department_name;

  @Edm.String
  company_id;

  @Edm.String
  company_name;

  @Edm.String
  address;
}

export default Login;
