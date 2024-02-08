import React from "react";
import { Button, Form } from "react-bootstrap";

type Props = {};

const CreateNotes = (props: Props) => {
  return (
    <>
      <h2>Create Notes</h2>
      <Form className="mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text">"Enter Title for the Note</Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTexxt">
          <Form.Label>Text</Form.Label>
          <Form.Control type="text" as="textarea" rows={3}>
            "Enter your Notes
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            // ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
