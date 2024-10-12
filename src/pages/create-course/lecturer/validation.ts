import * as yup from "yup";

export default yup.object().shape({
  username: yup.string().required("Description is required"),
  tags: yup.array().of(yup.string().required("Tags cannot be empty")).min(1, "At least one tag is required"),
  description: yup.string().required("Description is required")
});
