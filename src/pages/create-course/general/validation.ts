import * as yup from "yup";

export default yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  tags: yup.array().of(yup.string().required("Tags cannot be empty")).min(1, "At least one tag is required"),
  category: yup.string().required("Category is required"),
  level: yup.string().required("Level is required"),
  subcategory: yup.string().required("Subcategory is required"),
  language: yup.string().required("Language is required"),
  certificate: yup.boolean().nullable().notRequired(),
});
