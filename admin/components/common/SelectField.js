import { FormControl, FormLabel, Select, useMergeRefs } from "@chakra-ui/react";
import * as React from "react";

const SelectField = (props) => {
  const { label, id, data, ...rest } = props;

  return (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <Select placeholder={`Select ${id}`} {...rest}>
        {data.map((elem) => (
          <option key={elem.id} value={elem.id}>
            {elem.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
