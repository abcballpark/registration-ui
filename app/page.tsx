"use client";

import {
  Text,
  Spacer,
  ButtonGroup,
  Card,
  CardBody,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { DateInput } from "@saas-ui/date-picker";
import {
  FormLayout,
  PrevButton,
  NextButton,
  FormStepper,
  StepsCompleted,
  FormValue,
  LoadingOverlay,
  LoadingSpinner,
  LoadingText,
  PropertyList,
  Property,
} from "@saas-ui/react";
import { StepForm } from "@saas-ui/forms/yup";
import * as yup from "yup";
import ExpandableForm from "@/components/expandable-form";

export default function CreateAccount() {
  const steps = [
    {
      name: "parent",
      schema: yup.object({
        firstname: yup.string().required().label("First Name"),
        lastname: yup.string().required().label("Last Name"),
        phone: yup.string().required().label("Phone Number"),
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

  const onSubmit = (params: any) => {
    console.log(params);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <Card>
      <CardBody>
        <StepForm
          steps={steps}
          onSubmit={onSubmit}
          defaultValues={{
            firstname: "John",
            lastname: "Doe",
            email: "johndoe@example.com",
            phone: "555-555-5555",
            street: "1234 Main St",
            city: "New York",
            state: "NY",
            ZIP: "10120",

            password: "password",

            player_firstname: "Junior",
            player_lastname: "Doe",
            player_birthdate: "08/23/2015",

            invitees: "jane.doe@example.com",
          }}
        >
          {({ Field, FormStep }) => (
            <FormLayout>
              <FormStepper orientation="vertical">
                <FormStep name="parent" title="Parent Information">
                  <FormLayout>
                    <Field
                      name="firstname"
                      isRequired
                      label="First Name"
                      autoFocus
                    />
                    <Field name="lastname" isRequired label="Last Name" />
                    <Field name="phone" isRequired label="Phone Number" />
                    <Field name="email" isRequired label="Email" />
                    <Field name="street" isRequired label="Street Address" />
                    <Field name="city" isRequired label="City" />
                    <Field name="state" isRequired label="State" />
                    <Field name="ZIP" isRequired label="ZIP Code" />
                    <ButtonGroup w="full">
                      <Spacer />
                      <NextButton />
                    </ButtonGroup>
                  </FormLayout>
                </FormStep>
                <FormStep name="password" title="Password">
                  <FormLayout>
                    <Field
                      name="password"
                      isRequired
                      label="Password"
                      type="password"
                      autoFocus
                    />
                    <ButtonGroup w="full">
                      <PrevButton variant="ghost" />
                      <Spacer />
                      <NextButton />
                    </ButtonGroup>
                  </FormLayout>
                </FormStep>
                <FormStep name="players" title="Players">
                  <FormLayout>
                    {/* <ExpandableForm schema={}></ExpandableForm> */}
                    <Field
                      name="player_firstname"
                      isRequired
                      label="First Name"
                      autoFocus
                    />
                    <Field
                      name="player_lastname"
                      isRequired
                      label="Last Name"
                    />
                    {/* <FormControl>
                      <FormLabel>Birthdate</FormLabel>
                      <DateInput />
                    </FormControl> */}
                    <Field
                      name="player_birthdate"
                      isRequired
                      label="Birthdate"
                    />
                    <ButtonGroup w="full">
                      <PrevButton variant="ghost" />
                      <Spacer />
                      <NextButton />
                    </ButtonGroup>
                  </FormLayout>
                </FormStep>
                <FormStep name="invites" title="Invite other parents/guardians">
                  <FormLayout>
                    {/* TODO: Maybe some sort of chip thing? */}
                    <Field
                      name="invitees"
                      type="textarea"
                      label="Invites"
                      placeholder="hello@saas-ui.dev, etc"
                      autoFocus
                    />
                    <ButtonGroup w="full">
                      <PrevButton variant="ghost" />
                      <Spacer />
                      <NextButton />
                    </ButtonGroup>
                  </FormLayout>
                </FormStep>

                <FormStep name="confirm" title="Confirm">
                  <FormLayout>
                    <Text>
                      Please confirm that your information is correct.
                    </Text>
                    <PropertyList>
                      <Property
                        label="First Name"
                        value={<FormValue name="firstname" />}
                      />
                      <Property
                        label="Last Name"
                        value={<FormValue name="lastname" />}
                      />
                      <Property
                        label="Phone Number"
                        value={<FormValue name="phone" />}
                      />
                      <Property
                        label="Email"
                        value={<FormValue name="email" />}
                      />
                      <Property
                        label="Street Address"
                        value={<FormValue name="street" />}
                      />
                      <Property
                        label="City"
                        value={<FormValue name="city" />}
                      />
                      <Property
                        label="State"
                        value={<FormValue name="state" />}
                      />
                      <Property
                        label="ZIP Code"
                        value={<FormValue name="ZIP" />}
                      />
                      <Property
                        label="Player First Name"
                        value={<FormValue name="player_firstname" />}
                      />
                      <Property
                        label="Player Last Name"
                        value={<FormValue name="player_lastname" />}
                      />
                      <Property
                        label="Player Birthdate"
                        value={<FormValue name="player_birthdate" />}
                      />
                      <Property
                        label="Invitee(s)"
                        value={<FormValue name="invitees" />}
                      />
                    </PropertyList>

                    <ButtonGroup w="full">
                      <PrevButton variant="ghost" />
                      <Spacer />
                      <NextButton />
                    </ButtonGroup>
                  </FormLayout>
                </FormStep>

                <StepsCompleted>
                  <LoadingOverlay>
                    <LoadingSpinner />
                    <LoadingText>
                      We are setting up your account, just a moment...
                    </LoadingText>
                  </LoadingOverlay>
                </StepsCompleted>
              </FormStepper>
            </FormLayout>
          )}
        </StepForm>
      </CardBody>
    </Card>
  );
}
