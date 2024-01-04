"use client";

import { Card, CardBody, ButtonGroup, Spacer, Text, Container } from "@chakra-ui/react";
import {
  StepForm,
  FormLayout,
  FormStepper,
  NextButton,
  PrevButton,
  PropertyList,
  Property,
  FormValue,
  StepsCompleted,
  LoadingOverlay,
  LoadingSpinner,
  LoadingText,
} from "@saas-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import states from "states-us";

import formSteps from "./steps";
import formDefaults from "./defaults";
import AddressSearch from "@/components/address-search";

export default function Register() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const onSubmit = (params: any) => {
    console.log(params);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <>
      <Container padding={10} maxW="1000px">
        <Card variant="outline">
          <CardBody>
            <StepForm steps={formSteps} onSubmit={onSubmit} defaultValues={formDefaults}>
              {({ Field, FormStep }) => (
                <FormLayout>
                  <FormStepper orientation="vertical">
                    <FormStep name="parent" title="Parent Information">
                      <FormLayout columns={2}>
                        <Field name="firstname" isRequired label="First Name" autoFocus />
                        <Field name="lastname" isRequired label="Last Name" />
                      </FormLayout>
                      <FormLayout paddingTop={2} columns={2}>
                        <Field name="phonecell" isRequired label="Phone Number (Mobile)" />
                        <Field name="phonework" label="Phone Number (Work)" />
                      </FormLayout>
                      <FormLayout paddingTop={2}>
                        <Field name="email" isRequired label="Email" />
                      </FormLayout>
                      <FormLayout columns={2} paddingTop={2}>
                        <Field name="street" isRequired label="Street Address" />
                        <Field name="city" isRequired label="City" />
                      </FormLayout>
                      <FormLayout columns={2} paddingTop={2}>
                        {/* <Field name="state" isRequired label="State" /> */}
                        <Field
                          name="state"
                          type="select"
                          label="State"
                          options={states.map((state, i, arr) => {
                            return {
                              value: state.name,
                              id: state.abbreviation,
                            };
                          })}
                        />
                        <Field name="ZIP" isRequired label="ZIP Code" />
                      </FormLayout>
                      <FormLayout paddingTop={2}>
                        <ButtonGroup w="full">
                          <Spacer />
                          <NextButton />
                        </ButtonGroup>
                      </FormLayout>
                    </FormStep>
                    <FormStep name="password" title="Password">
                      <FormLayout>
                        <Field name="password" isRequired label="Password" type="password" autoFocus />
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
                        <Field name="player_firstname" isRequired label="First Name" autoFocus />
                        <Field name="player_lastname" isRequired label="Last Name" />
                        {/* <FormControl>
                    <FormLabel>Birthdate</FormLabel>
                    <DateInput />
                  </FormControl> */}
                        <Field name="player_birthdate" isRequired label="Birthdate" />
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
                        <Text>Please confirm that your information is correct.</Text>
                        <PropertyList>
                          <Property label="First Name" value={<FormValue name="firstname" />} />
                          <Property label="Last Name" value={<FormValue name="lastname" />} />
                          <Property label="Phone Number" value={<FormValue name="phone" />} />
                          <Property label="Email" value={<FormValue name="email" />} />
                          <Property label="Street Address" value={<FormValue name="street" />} />
                          <Property label="City" value={<FormValue name="city" />} />
                          <Property label="State" value={<FormValue name="state" />} />
                          <Property label="ZIP Code" value={<FormValue name="ZIP" />} />
                          <Property label="Player First Name" value={<FormValue name="player_firstname" />} />
                          <Property label="Player Last Name" value={<FormValue name="player_lastname" />} />
                          <Property label="Player Birthdate" value={<FormValue name="player_birthdate" />} />
                          <Property label="Invitee(s)" value={<FormValue name="invitees" />} />
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
                        <LoadingText>We are setting up your account, just a moment...</LoadingText>
                      </LoadingOverlay>
                    </StepsCompleted>
                  </FormStepper>
                </FormLayout>
              )}
            </StepForm>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
