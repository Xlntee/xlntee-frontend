import { FC, useState } from "react";
import { Button, Container, Stack, Box, Typography, Grid, TextField, InputLabel, Divider } from "@mui/material";

import { DialogModal, Snackbar } from "src/shared/ui";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";
import { Header, HeaderProfile } from "src/widgets/components";
import { UserRoles } from "src/shared/config/user-role";

const typographyList = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

const UiPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const [modalObj, setModalObj] = useState<Record<string, boolean>>({
    delete: false,
    send: false,
    default: false
  });

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
        <Typography variant="h2">Buttons</Typography>
        <Box maxWidth="max-content">
          <Grid container spacing="10px">
            <Grid item md={4}>
              <Stack gap="10px">
                <Button color="primary" variant="contained" size="small">
                  Primary contained
                </Button>
                <Button color="primary" variant="contained" size="medium">
                  Primary contained
                </Button>
                <Button color="primary" variant="contained" size="large">
                  Primary contained
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button color="primary" variant="outlined" size="small" className="button-rounded-xl">
                  Primary outlined
                </Button>
                <Button color="primary" variant="outlined" size="medium" className="button-rounded-xl">
                  Primary outlined
                </Button>
                <Button color="primary" variant="outlined" size="large" className="button-rounded-xl">
                  Primary outlined
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button color="primary" variant="text" size="small">
                  Primary text
                </Button>
                <Button color="primary" variant="text" size="medium">
                  Primary text
                </Button>
                <Button color="primary" variant="text" size="large">
                  Primary text
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button color="secondary" variant="contained" size="small">
                  Secondary contained
                </Button>
                <Button color="secondary" variant="contained" size="medium">
                  Secondary contained
                </Button>
                <Button color="secondary" variant="contained" size="large">
                  Secondary contained
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button color="secondary" variant="outlined" size="small" className="button-rounded-xl">
                  Secondary contained
                </Button>
                <Button color="secondary" variant="outlined" size="medium" className="button-rounded-xl">
                  Secondary contained
                </Button>
                <Button color="secondary" variant="outlined" size="large" className="button-rounded-xl">
                  Secondary contained
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button color="secondary" variant="text" size="small">
                  Secondary text
                </Button>
                <Button color="secondary" variant="text" size="medium">
                  Secondary text
                </Button>
                <Button color="secondary" variant="text" size="large">
                  Secondary text
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button variant="dark-contain" size="small">
                  Black contain
                </Button>
                <Button variant="dark-contain" size="medium">
                  Black contain
                </Button>
                <Button variant="dark-contain" size="large">
                  Black contain
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button variant="dark-outline" size="small" className="button-rounded-xl">
                  Secondary text
                </Button>
                <Button variant="dark-outline" size="medium" className="button-rounded-xl">
                  Secondary text
                </Button>
                <Button variant="dark-outline" size="large" className="button-rounded-xl">
                  Secondary text
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button variant="dark-text" size="small" className="button-rounded-xl">
                  Text
                </Button>
                <Button variant="dark-text" size="medium" className="button-rounded-xl">
                  Text
                </Button>
                <Button variant="dark-text" size="large" className="button-rounded-xl">
                  Text
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button variant="light-contain" size="small">
                  Light contain
                </Button>
                <Button variant="light-text" size="small">
                  Light text
                </Button>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack gap="10px">
                <Button variant="light-contain" size="small" className="button-rounded-xl">
                  Light contain
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
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
          <Typography variant="h2">Modals</Typography>
          <Stack direction="row" gap="40px">
            <Box>
              <Button
                size="small"
                onClick={() =>
                  setModalObj((prev) => {
                    return {
                      ...prev,
                      default: true
                    };
                  })
                }
                variant="contained"
              >
                Modal default
              </Button>
              <DialogModal
                open={modalObj["default"]}
                handleAgree={() => console.log(1)}
                handleClose={() => {
                  setModalObj((prev) => {
                    return {
                      ...prev,
                      default: false
                    };
                  });
                }}
                showCloseButtonIcon
                title={"Title"}
              >
                <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, ipsum!</Typography>
              </DialogModal>
            </Box>
            <Box>
              <Button
                size="small"
                onClick={() =>
                  setModalObj((prev) => {
                    return {
                      ...prev,
                      delete: true
                    };
                  })
                }
                variant="contained"
              >
                Modal delete open
              </Button>
              <DialogModal
                open={modalObj["delete"]}
                showCloseButtonIcon
                type="delete"
                title="Title"
                primaryButtonText="Agree"
                secondaryButtonText="Close"
                handleAgree={() => console.log(1)}
                handleClose={() => {
                  setModalObj((prev) => {
                    return {
                      ...prev,
                      delete: false
                    };
                  });
                }}
              >
                <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, ipsum!</Typography>
              </DialogModal>
            </Box>
            <Box>
              <Button
                size="small"
                onClick={() =>
                  setModalObj((prev) => {
                    return {
                      ...prev,
                      send: true
                    };
                  })
                }
                variant="contained"
              >
                Modal send open
              </Button>
              <DialogModal
                open={modalObj["send"]}
                showCloseButtonIcon
                type="send"
                title={"Title"}
                primaryButtonText="Send"
                secondaryButtonText="Close"
                handleAgree={() => console.log(1)}
                handleClose={() => {
                  setModalObj((prev) => {
                    return {
                      ...prev,
                      send: false
                    };
                  });
                }}
              >
                <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, ipsum!</Typography>
              </DialogModal>
            </Box>
          </Stack>
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
          <HeaderProfile userRole={UserRoles.student} />
        </Box>
        <Box mb="20px">
          <Typography mb="20px" variant="h3">
            Teacher
          </Typography>
          <HeaderProfile userRole={UserRoles.teacher} />
        </Box>
      </Container>
    </Box>
  );
};

export default UiPage;
