import { FC, useState } from "react";
import { Button, Container, Stack, Box, Typography, Grid, TextField, InputLabel, Divider } from "@mui/material";

import { Snackbar } from "src/features";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { Header, HeaderProfile } from "src/widgets/components";
import { UserRole } from "src/shared/utils/enum";

const typographyList = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
const buttonColorList = ["primary", "secondary", "success", "error"] as const;

const renderButtons = (variant: string, size: string, className?: string): JSX.Element => {
  return (
    <>
      {buttonColorList.map((item) => (
        <Button key={item} color={item} variant={variant as any} size={size as any} className={className}>
          {item}
        </Button>
      ))}
    </>
  );
};

const renderButtonsGridCol = (variant: string, className?: string): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6">{variant} small</Typography>
      <Stack gap={2} mb={2} direction="column" alignItems="start">
        {renderButtons(variant, "small", className)}
      </Stack>
      <Typography variant="h6">{variant} medium</Typography>
      <Stack gap={2} mb={2} direction="column" alignItems="start">
        {renderButtons(variant, "medium", className)}
      </Stack>
      <Typography variant="h6">{variant} large</Typography>
      <Stack gap={2} mb={2} direction="column" alignItems="start">
        {renderButtons(variant, "large", className)}
      </Stack>
    </Grid>
  );
};

const UiPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  return (
    <Box component="section" paddingBlock={4}>
      <Container>
        <Typography variant="h2">Typography</Typography>
        <Box mb={2}>
          {typographyList.map((item) => (
            <Typography key={item} variant={item}>
              Heading {item}
            </Typography>
          ))}
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">Text body 1</Typography>
            <Typography variant="body2">Text body 2</Typography>
            <Typography variant="caption">Text caption</Typography>
            <Typography variant="subtitle1">Text subtitle1</Typography>
            <Typography variant="subtitle2">Text subtitle2</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1" color="primary">
              Text body 1 primary
            </Typography>
            <Typography variant="body2" color="primary">
              Text body 2 primary
            </Typography>
            <Typography variant="caption" color="primary">
              Text caption primary
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Text subtitle1
            </Typography>
            <Typography variant="subtitle2" color="primary">
              Text subtitle2
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1" color="secondary">
              Text body 1 secondary
            </Typography>
            <Typography variant="body2" color="secondary">
              Text body 2 secondary
            </Typography>
            <Typography variant="caption" color="secondary">
              Text caption secondary
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              Text subtitle1
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              Text subtitle2
            </Typography>
          </Grid>
        </Grid>
        <Box marginBlock={3}>
          <Divider />
        </Box>
        <Typography variant="h2">Buttons Default</Typography>
        <Grid container spacing={2}>
          {renderButtonsGridCol("contained")}
          {renderButtonsGridCol("outlined")}
          {renderButtonsGridCol("text")}
        </Grid>
        <Typography variant="h2">Buttons Rounded</Typography>
        <Grid container spacing={2}>
          {renderButtonsGridCol("contained", "button-rounded-md")}
          {renderButtonsGridCol("outlined", "button-rounded-md")}
          {renderButtonsGridCol("text", "button-rounded-lg")}
        </Grid>
        <Typography variant="h2">Buttons custom variants</Typography>
        <Grid container spacing={4}>
          {renderButtonsGridCol("black-contain", "button-rounded-md")}
          {renderButtonsGridCol("black-outline", "button-rounded-md")}
          {renderButtonsGridCol("black-text")}
        </Grid>
        <Box marginBlock={3}>
          <Divider />
        </Box>
        <Typography variant="h2">Text Fields</Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack direction="column" gap={2} mb={2}>
              <Box width="100%">
                <InputLabel required shrink={false} htmlFor="field1">
                  Label
                </InputLabel>
                <TextField required id="field1" fullWidth variant="outlined" size="small" placeholder="placeholder" />
              </Box>
              <TextField
                required
                label="Label"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                required
                disabled
                label="Label"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Box mb="20px">
          <Typography variant="h2">Snackbar</Typography>
          <Button onClick={() => setShowSnackbar(true)} variant="contained">
            Snackbar open
          </Button>
          <Snackbar open={showSnackbar} onClose={() => setShowSnackbar(false)} title="Snackbar message" />
        </Box>

        <Box mb="20px">
          <Typography variant="h2">Header</Typography>
          <Header />
        </Box>
        <Box mb="20px">
          <Typography variant="h2">HeaderProfile</Typography>
        </Box>
        <Box mb="20px">
          <Typography mb="20px" variant="h3">
            Student
          </Typography>
          <HeaderProfile userRole={UserRole.STUDENT} />
        </Box>
        <Box mb="20px">
          <Typography mb="20px" variant="h3">
            Teacher
          </Typography>
          <HeaderProfile userRole={UserRole.TEACHER} />
        </Box>
      </Container>
    </Box>
  );
};

export default UiPage;
