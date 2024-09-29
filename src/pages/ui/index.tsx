import { CSSProperties, useState } from "react";
import { Button, Container, Stack, Box, Typography, Grid, TextField, InputLabel, Divider } from "@mui/material";

import { Snackbar } from "src/features";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { Header, HeaderProfile } from "src/widgets/components";

const typographyList = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
const buttonColorList = ["primary", "secondary", "success", "error"] as const;
const buttonSizeList = ["small", "medium", "large"];

const renderButtons = (variant: string, size: string, styles?: CSSProperties) => {
  return (
    <>
      {buttonColorList.map((item) => (
        <Button key={item} color={item} variant={variant as any} size={size as any} style={styles}>
          {item}
        </Button>
      ))}
    </>
  );
};

const renderButtonsGridCol = (variant: string, styles?: CSSProperties) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6">{variant} small</Typography>
      <Stack gap={2} mb={2} direction="column">
        {renderButtons(variant, "small", styles)}
      </Stack>
      <Typography variant="h6">{variant} medium</Typography>
      <Stack gap={2} mb={2} direction="column">
        {renderButtons(variant, "medium", styles)}
      </Stack>
      <Typography variant="h6">{variant} large</Typography>
      <Stack gap={2} mb={2} direction="column">
        {renderButtons(variant, "large", styles)}
      </Stack>
    </Grid>
  );
};

const renderButtonsBlack = (variant: "black-contain" | "black-outline" | "black-text", styles?: CSSProperties) => {
  return (
    <Stack gap={2} mb={2} direction="column">
      {buttonSizeList.map((item) => (
        <Button key={item} variant={variant} size={item as any} style={styles}>
          {variant}
        </Button>
      ))}
    </Stack>
  );
};

const UiPage = ({ title }: PageProps) => {
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
          {renderButtonsGridCol("contained", {
            borderRadius: 25,
          })}
          {renderButtonsGridCol("outlined", {
            borderRadius: 25,
          })}
          {renderButtonsGridCol("text", {
            borderRadius: 50,
          })}
        </Grid>
        <Typography variant="h2">Buttons custom variants</Typography>
        <Grid container spacing={4}>
          <Grid item>{renderButtonsBlack("black-contain")}</Grid>
          <Grid item>{renderButtonsBlack("black-outline")}</Grid>
          <Grid item>{renderButtonsBlack("black-text")}</Grid>
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
                  shrink: true,
                }}
              />
              <TextField
                required
                disabled
                label="Label"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
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
          <HeaderProfile />
        </Box>
        <Box mb="20px">
          <Typography mb="20px" variant="h3">
            Teacher
          </Typography>
          <HeaderProfile />
        </Box>
      </Container>
    </Box>
  );
};

export default UiPage;
