import { Edm } from "odata-v4-server";

class histoycompany {
  @Edm.Key
  @Edm.Date
  check_date;
  
  @Edm.Key
  @Edm.String
  employee_id;

  @Edm.String
  first_name;

  @Edm.String
  last_name;

  @Edm.Int16
  result;

}

export default histoycompany;
