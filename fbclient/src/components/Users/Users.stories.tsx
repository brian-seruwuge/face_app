import { storiesOf } from "@storybook/react";
import * as React from "react";
import Users from "./Users";


const props:any= {
  staffs: [
    {
      id: 1,
      firstName: "Brian",
      lastName: "Sseruwugge",
      department: "Surveyor",
      MZO: "NLIC"
    },
    {
      id: 2,
      firstName: "Joseph",
      lastName: "Mivule",
      department: "ICT/developer",
      MZO: "NLIC"
    },
    {
      id: 3,
      firstName: "Solomon",
      lastName: "Ruzima",
      department: "ICT/security",
      MZO: "NLIC"
    },
    {
      id: 4,
      firstName: "Ronald",
      lastName: "Okory",
      department: "Valuation",
      MZO: "Lira"
    }
  ]
}







storiesOf("Users", module)
  .add("with text", () => <Users {...props}/>)
