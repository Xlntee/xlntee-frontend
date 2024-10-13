import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CloseIcon from "@mui/icons-material/CloseOutlined";

import { XlnteeColors } from "src/shared/themes/colors";
import CheckboxOption from "../checkbox-option/CheckboxOption";

import "./RefundModal.scss";

interface FormValues {
  reasons: string[];
  details: string;
}

const RefundModal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  function handleModalOpen(): void {
    setIsModalOpen(true);
  }

  function handleModalClose(): void {
    setIsModalOpen(false);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      reasons: [],
      details: ""
    }
  });

  function onSubmit(data: FormValues): void {
    console.log(data);
    reset();
    setIsSubmit(true);
  }

  return (
    <Box>
      <Button onClick={handleModalOpen} variant="black-text" startIcon={<CreditCardIcon />}>
        <Typography variant="body2">Повернути кошти</Typography>
      </Button>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box className="complain-modal__modal">
          {isSubmit ? (
            <Grid container>
              <Grid item xs={6}>
                <img src="/assets/refund-modal.png" alt="refund" />
              </Grid>
              <Grid item xs={6}>
                <Typography>Дякуємо! Ваша заявка на повернення коштів була прийнята, її номер: RRID0595032</Typography>
                <Typography>
                  Перегляд заявки може зайняти до 3 робочих дня, всю інформацію щодо рішення та статусу заявки ви
                  отримаєте на вашу електронну адресу.
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
                  label="Цей курс не відповідає зазначеному рівню складності"
                  value="complexity course"
                  {...register("reasons")}
                />
                <CheckboxOption
                  label="Технічні проблеми, не вдається отримати доступ до лекції, розділу, файлу або конкретної сторінки"
                  value="technical problems"
                  {...register("reasons")}
                />
                <CheckboxOption label="Погана якість відео/аудіо/файл" value="bad quality" {...register("reasons")} />
                <CheckboxOption
                  label="Матеріали лекцій не відповідають зазначеним в описі курсу темам."
                  value="bad material"
                  {...register("reasons")}
                />
                <CheckboxOption
                  label="Відсутність комунікації, лектор або адміністратор курсу не відповідає на мої запитання"
                  value="bad communication"
                  {...register("reasons")}
                />
                <CheckboxOption
                  label="Низька якість/професійність лектора"
                  value="bad professionalism"
                  {...register("reasons")}
                />
                <TextField
                  fullWidth
                  placeholder="Опишіть будь ласка детальну причину..."
                  {...register("details", { required: "Це поле обов'язкове" })}
                  error={!!errors.details}
                  helperText={errors.details?.message}
                />
                <Typography variant="body2">*Ви можете обрати декілька причин для скарги</Typography>
                <Typography variant="body2" color="secondary">
                  ** Після подачі заявки на повернення коштів, ваш доступ до курсу буде обмежено
                </Typography>
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

export default RefundModal;
