import * as yup from "yup";

export const landingValidationSchema = yup.object().shape({
  subjects: yup.array().of(yup.string().required("Subjects cannot be empty")).min(1, "At least one tag is required"),
  requirements: yup
    .array()
    .of(yup.string().required("Requirements cannot be empty"))
    .min(1, "At least one tag is required"),
  description: yup.string().required("Description is required"),
  image: yup.string().required("Image is required"),
  video: yup.string().required("Video is required")
});

export type LandingFormValues = yup.InferType<typeof landingValidationSchema>;
