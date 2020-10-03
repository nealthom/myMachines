import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PageLayout, Input, Button } from "components/common";
import search from "utils/search";
import { getData } from "../../utils/getData";

const FormWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }
`;

export default function Search({ setResults }) {
  const [searchField, setSearchField] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getData());
  }, []);

  function handleInputChange(e) {
    e.persist();
    setSearchField(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let found = search(data, searchField);
    setResults(found);
  }

  return (
    <PageLayout>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            name="machine"
            placeholder="Search Machines"
            type="text"
            autocomplete="off"
            value={searchField}
            onChange={handleInputChange}
          />
          <Button large type="submit">
            Search
          </Button>
        </Form>
      </FormWrapper>
    </PageLayout>
  );
}
