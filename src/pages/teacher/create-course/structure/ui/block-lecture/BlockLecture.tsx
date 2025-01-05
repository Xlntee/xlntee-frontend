import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ReactQuill from "react-quill";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";

import { Box, Typography, Stack, Button, useTheme } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArticleIcon from "@mui/icons-material/Article";

import useDialog from "src/shared/hooks/useDialog";
import { FileUpload, VideoUpload } from "src/shared/ui";
import { TextField } from "src/shared/ui/form-fields";

import { getInitialTestConfiguration } from "../../store/initialData";

import { BlockQuiz } from "../block-quiz";
import { LectureFilePreview } from "../lecture-file-preview";
import { LecturesArrayFormValues } from "./validation";

import "./BlockLecture.scss";
import useInverseColor from "src/shared/hooks/useInverseColor";

type BlockLectureProps = {
  id: string;
  index: number;
  lessonId: string;
};

type FileLectureProps = {
  id: string;
  name: string;
};

const BlockLecture: FC<BlockLectureProps> = ({ lessonId, id, index }) => {
  const { t } = useTranslation("teacher-create-course");
  const theme = useTheme();

  const { getInverseColor } = useInverseColor();
  const { onOpenDialog } = useDialog();
  const { setValue } = useFormContext<LecturesArrayFormValues>();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [files, setFiles] = useState<FileLectureProps[] | null>(null);
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);

  function onOpenModal(indexLecture: number): void {
    onOpenDialog({
      dialogName: "DELETE_LECTURE_DIALOG",
      options: {
        id: indexLecture,
        lessonId: lessonId,
        lectureId: id
      }
    });
  }

  function onAddQuiz(): void {
    setShowQuiz((prevState) => !prevState);
    const initialData = getInitialTestConfiguration();
    const { id: testConfigurationId, question, variants } = initialData;

    setValue(`lectures.${index}.testConfigurations`, [
      {
        customId: testConfigurationId,
        question: question,
        variants: [
          {
            customId: variants[0].id,
            ...variants[0]
          },
          {
            customId: variants[1].id,
            ...variants[1]
          }
        ]
      }
    ]);
  }

  function onAddVideo(file: File): void {
    setValue(`lectures.${index}.video`, "1");
    setVideoFile(file.name);
  }

  function onAddFile(fileList: FileList): void {
    const filesArr: FileLectureProps[] = [];

    for (let file of fileList) {
      filesArr.push({
        id: uuidv4(),
        name: file.name
      });
    }

    const filesIdArr = filesArr.map((file) => file.id);
    setValue(`lectures.${index}.files`, filesIdArr);
    setFiles(filesArr);
  }

  function onChangeRichText(value: string): void {
    setValue(`lectures.${index}.description`, value);
  }

  return (
    <Stack
      direction="column"
      gap="20px"
      className={cn("block-lecture base-shadow", { "block-lecture--collapsed": isCollapsed })}
      bgcolor={getInverseColor(theme.palette.primary.main, "transparent")}
    >
      <Box className="block-lecture__header">
        <Typography variant="h4" color={theme.palette.primary.contrastText}>
          {t("structure.lecture")} #{index + 1}
        </Typography>
        <Button
          className={cn("collapse-toggler", { active: isCollapsed })}
          onClick={() => setIsCollapsed((prevState) => !prevState)}
          variant="light-text"
        >
          <ArrowDropUpIcon />
        </Button>
        <Button
          variant="light-text"
          size="medium"
          className="block-lecture__action-delete"
          onClick={() => onOpenModal(index)}
        >
          <DeleteOutlineIcon />
        </Button>
      </Box>
      <TextField
        name={`lectures.${index}.title`}
        variant="outlined"
        fullWidth
        placeholder={t("structure.title-lecture-placeholder") + "..."}
        className="field-box-light"
      />
      <Box className="block-lecture__body">
        <Box display="flex" flexDirection="column" gap="20px">
          {videoFile && (
            <Stack gap="20px">
              <LectureFilePreview type="video" value={videoFile} onDelete={() => setVideoFile(null)} />
              <Box className="lecture-description">
                <ArticleIcon
                  sx={{
                    color: theme.palette.primary.contrastText
                  }}
                />
                <ReactQuill
                  onBlur={(_a, _b, value) => {
                    onChangeRichText(value.getHTML());
                  }}
                />
              </Box>
            </Stack>
          )}
          {files !== null && files.length && (
            <>
              {files.map((file) => (
                <LectureFilePreview
                  key={file.id}
                  type="file"
                  value={file.name}
                  onDelete={() => {
                    console.log("delete file");
                  }}
                />
              ))}
            </>
          )}
          {showQuiz && (
            <BlockQuiz
              lessonId={lessonId}
              lectureId={id}
              lectureIndex={index}
              onCloseQuiz={() => {
                setShowQuiz(false);
              }}
            />
          )}
        </Box>
        <Box className="block-lecture__actions-grid">
          <VideoUpload
            video={videoFile}
            disabled={!!videoFile}
            showPreview={false}
            togglerVariant="light-contain"
            buttonText={t("structure.video-upload-button-text")}
            onChange={(file) => {
              onAddVideo(file as File);
            }}
          />
          <FileUpload
            multiple
            disabled={!!files}
            togglerVariant="light-contain"
            buttonText={t("structure.file-upload-button-text")}
            onChange={(fileList) => {
              onAddFile(fileList as FileList);
            }}
          />
          <Button variant="light-contain" size="medium" disabled={showQuiz} onClick={onAddQuiz}>
            + {t("structure.lecture-add-quiz")}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default BlockLecture;
