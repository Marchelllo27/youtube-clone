import * as yup from "yup";

const uploadValidation = yup.object().shape({
  videoUrl: yup.mixed().required("Please choose a video"),
  title: yup.string().trim().required("Title is required!"),
  desc: yup.string().trim().min(10, "Minimum 10 characters").required("Description is required!"),
  tags: yup.string().trim().required("Tags are required!"),
  imgUrl: yup.mixed().required("Image is required!"),
});

export default uploadValidation;
