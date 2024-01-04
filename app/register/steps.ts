import * as yup from "yup";

export default [
  {
    name: "parent",
    schema: yup.object({
      firstname: yup.string().required().label("First Name"),
      lastname: yup.string().required().label("Last Name"),
      phonecell: yup.string().required().label("Phone Number (Mobile)"),
      phonework: yup.string().required().label("Phone Number (Work)"),
      email: yup.string().email().required().label("Email"),
    }),
  },
  {
    name: "password",
    schema: yup.object({
      password: yup.string().required().label("Password"),
    }),
  },
  {
    name: "players",
    // schema: yup.array().of(
    // yup.object({
    schema: yup.object({
      player_firstname: yup.string().required().label("First Name"),
      player_lastname: yup.string().required().label("Last Name"),
      player_birthdate: yup.date().required().label("Birthdate"),
    }),
    // ),
  },
  {
    name: "invites",
    schema: yup.object({
      invitees: yup.string().label("Invites"),
    }),
  },
];
