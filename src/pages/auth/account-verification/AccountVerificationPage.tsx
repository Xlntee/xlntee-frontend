import { Link } from "react-router-dom";

import { Box, Button, Container, Typography, Stack } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { OtpInput } from "src/features";
import { PageProps } from "pages/type";

import "./AccountVerificationPage.scss";

const AccountVerificationPage = ({ title }: PageProps) => {
  useTitle(title);

  const getShortEmail = (email: string) => {
    return email;
  };

  return (
    <Box component="section" className="section-account-verification" py="40px">
      <Container>
        <Stack gap="10px" maxWidth="360px" marginInline="auto" className="section-account-verification__content">
          <img src="/assets/account-verification.png" />
          <Typography variant="h4" fontWeight={400}>
            Account Verification
          </Typography>
          <Typography variant="body2" textAlign="left" mb="20px">
            A verification code was sent to the email address {getShortEmail("namesurname@gmail.com")} This is not your
            email address? <Link to="/">Enter another</Link>
          </Typography>
          <Box maxWidth="280px" marginInline="auto">
            <Box mb="20px">
              <OtpInput length={4} onUpdate={(value) => console.log(value)} />
            </Box>
            <Typography variant="body2">
              Haven't received the code yet? check your spam folder or <Button className="button-link">resend</Button>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AccountVerificationPage;
