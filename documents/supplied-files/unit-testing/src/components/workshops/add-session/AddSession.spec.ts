import RequestSession from "./AddSession.vue";
import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

describe("AddSession form", () => {
    it("should display that the speaker is required when user visits the speaker field and navigates away without filling the field", async () => {
        render(RequestSession);

        const speakerInputEl = screen.getByLabelText("Speaker");
        const nameInputEl = screen.getByLabelText("Name");

        await fireEvent.click(speakerInputEl);
        await fireEvent.click(nameInputEl);

        const erorMessageEl = await screen.findByText(/Speaker is required/i);
        expect(erorMessageEl).toBeInTheDocument();
    });

    it("should display an error message if name is given an invalid value", async () => {
        render(RequestSession);

        const speakerInputEl = screen.getByLabelText("Speaker");
        const nameInputEl = screen.getByLabelText("Name");

        await fireEvent.click(nameInputEl);
        await fireEvent.update(nameInputEl, "New?Session");
        await fireEvent.click(speakerInputEl);

        const erorMessageEl = await screen.findByText(
            /Name should have only letters or spaces/i
        );
        expect(erorMessageEl).toBeInTheDocument();
    });

    it("should not display an error message if the value for name is correct", async () => {
        render(RequestSession);

        const speakerInputEl = screen.getByLabelText("Speaker");
        const nameInputEl = screen.getByLabelText("Name");

        await fireEvent.click(nameInputEl);
        await fireEvent.update(
            nameInputEl,
            "Using Pinia for sharing global state"
        );
        await fireEvent.click(speakerInputEl);

        const erorMessageEl = await screen.queryByText(
            /Name should have only letters or spaces/i
        );
        expect(erorMessageEl).not.toBeInTheDocument();
    });

    it("should add a new session if all inputs are valid and the form is submitted", async () => {
        render(RequestSession);

        const sequenceIdInputEl = screen.getByLabelText("Sequence ID");
        const nameInputEl = screen.getByLabelText("Name");
        const speakerInputEl = screen.getByLabelText("Speaker");
        const durationInputEl = screen.getByLabelText("Duration");
        const abstractInputEl = screen.getByLabelText("Abstract");

        const buttonEl = screen.getByTestId("btn-submit");

        await fireEvent.update(sequenceIdInputEl, "1");
        await fireEvent.update(nameInputEl, "New session in Vue");
        await fireEvent.update(speakerInputEl, "John Doe");
        await fireEvent.update(durationInputEl, "2.5");
        await fireEvent.update(
            abstractInputEl,
            "New session in Vue 3 Composition API"
        );

        await fireEvent.click(buttonEl);

        const messageEl = await screen.findByText("Added session with id = 6");
        expect(messageEl).toBeInTheDocument();
    });
});
