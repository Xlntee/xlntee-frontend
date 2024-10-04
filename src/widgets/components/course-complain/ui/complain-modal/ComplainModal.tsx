import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { Box, Button, Grid, Modal, TextField, Tooltip, Typography } from "@mui/material";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import CloseIcon from "@mui/icons-material/CloseOutlined";

import { XlnteeColors } from "src/shared/themes/colors";
import CheckboxOption from "../checkbox-option/CheckboxOption";

import "./ComlainModal.scss";

interface FormValues {
  reasons: string[];
  details: string;
}

interface ComplainModalProps {
  percentage: number;
}

const ComplainModal: FC<ComplainModalProps> = ({ percentage }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      reasons: [],
      details: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
    setIsSubmit(true);
  };

  return (
    <Box className="complain-modal">
      <Tooltip
        className="complain-modal__tooltip"
        title={
          <Typography variant="h5" color={XlnteeColors.GrayColor700}>
            Справедливі скарги. Ми серйозно ставимось до скарг, тому аби поскаржитись на цей курс або його автора
            потрібно пройти не менше 25%, після чого вам точно буде, що розповісти.
          </Typography>
        }
        disableHoverListener={percentage >= 25}
      >
        <span>
          <Button
            onClick={handleModalOpen}
            variant="black-text"
            startIcon={<NewReleasesOutlinedIcon />}
            disabled={percentage < 25}
          >
            Поскаржитись
          </Button>
        </span>
      </Tooltip>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box className="complain-modal__modal">
          {isSubmit ? (
            <Grid container>
              <Grid item xs={6}>
                <img src="/assets/complain-modal.png" />
              </Grid>
              <Grid item xs={6}>
                <Typography>Ваша скарга прийнята, її номер: RID0221039 </Typography>
                <Typography>
                  Дякуємо, що допомагаєте тримати якість курсів під контролем, для нас це дуже важливо.
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <>
              <Typography variant="h4" alignSelf="flex-start" fontWeight="300">
                Оберіть будь-ласка причину повернення коштів*
              </Typography>
              <form className="complain-modal__form" onSubmit={handleSubmit(onSubmit)}>
                <CheckboxOption
                  label="Низька якість курсу (відео, аудіо, файли, тексту)"
                  value="low quality course"
                  {...register("reasons")}
                />
                <CheckboxOption
                  label="Мала якість корисних ресурсів (файли, відео)"
                  value="low quality resourses"
                  {...register("reasons")}
                />
                <CheckboxOption
                  label="Програма навчання не відповідає заявленій"
                  value="bad program"
                  {...register("reasons")}
                />
                <CheckboxOption label="Низький рівень викладання" value="low study level" {...register("reasons")} />
                <CheckboxOption label="Інше" value="Other" {...register("reasons")} />
                <TextField
                  fullWidth
                  placeholder="Опишіть будь ласка детальну причину..."
                  {...register("details", { required: "Це поле обов'язкове" })}
                  error={!!errors.details}
                  helperText={errors.details?.message}
                />
                <Typography variant="body2">*Ви можете обрати декілька причин для скарги</Typography>
                <Button className="complain-modal__submit-btn" type="submit" variant="black-contain">
                  Відправити
                </Button>
              </form>
            </>
          )}

          <Button sx={{ position: "absolute", top: 0, right: 0 }}>
            <CloseIcon fontSize="large" sx={{ color: XlnteeColors.BlackElementColor }} onClick={handleModalClose} />
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ComplainModal;
