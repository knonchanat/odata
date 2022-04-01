import { Edm } from "odata-v4-server";

class histoyemployee {
  @Edm.Key
  @Edm.Date
  check_date;

  @Edm.Int16
  result;

  @Edm.Key  
  @Edm.String
  brand_id;

  @Edm.String
  photo_name;

}

export default histoyemployee;
