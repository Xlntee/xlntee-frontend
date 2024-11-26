import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ReactQuill from "react-quill";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";

import { Box, Typography, Stack, Button } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArticleIcon from "@mui/icons-material/Article";

import { XlnteeColors } from "src/shared/themes/colors";
import { DialogModal, FileUpload, VideoUpload } from "src/features";
import useDialogModal from "src/hooks/useDialogModal";

import { TextField } from "src/features/form-fields";

import { getInitialTestConfiguration } from "../../store/initialData";

import { BlockQuiz } from "../block-quiz";
import { LectureFilePreview } from "../lecture-file-preview";
import { LecturesArrayFormValues } from "./validation";

import "./BlockLecture.scss";

type BlockLectureProps = {
  id: string;
  index: number;
  lessonId: string;
  onDelete: (index: number) => void;
};

type FileLectureProps = {
  id: string;
  name: string;
};

const BlockLecture: FC<BlockLectureProps> = ({ lessonId, id, index, onDelete }) => {
  const { t } = useTranslation("teacher-create-course");
  const { t: dialogModalT } = useTranslation("dialog-modal");

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const [files, setFiles] = useState<FileLectureProps[] | null>(null);
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);

  const { setValue } = useFormContext<LecturesArrayFormValues>();
  const { openModal, onOpenModal, onCloseModal } = useDialogModal();

  function onDeleteLecture(): void {
    onDelete(index);
    onCloseModal();
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
    <Stack direction="column" gap="20px" className={cn("block-lecture", { "block-lecture--collapsed": isCollapsed })}>
      <Box className="block-lecture__header">
        <Typography variant="h4" color={XlnteeColors.LightColor}>
          {t("structure.lecture")} #{index + 1}
        </Typography>
        <Button
          className={cn("collapse-toggler", { active: isCollapsed })}
          onClick={() => setIsCollapsed((prevState) => !prevState)}
        >
          <ArrowDropUpIcon />
        </Button>
        <Button
          variant="white-text"
          size="medium"
          className="block-lecture__action-delete"
          onClick={() => onOpenModal(id)}
        >
          <DeleteOutlineIcon />
        </Button>
      </Box>
      <TextField
        name={`lectures.${index}.title`}
        variant="outlined"
        fullWidth
        placeholder={t("structure.title-lecture-placeholder") + "..."}
        className="text-field-light block-lecture__title"
      />
      <Box className="block-lecture__body">
        <Box display="flex" flexDirection="column" gap="20px">
          {videoFile && (
            <Stack gap="20px">
              <LectureFilePreview type="video" value={videoFile} onDelete={() => setVideoFile(null)} />
              <Box className="lecture-description">
                <ArticleIcon />
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
            togglerVariant="white-contain"
            buttonText={t("structure.video-upload-button-text")}
            onChange={(file) => {
              onAddVideo(file as File);
            }}
          />
          <FileUpload
            multiple
            disabled={!!files}
            togglerVariant="white-contain"
            buttonText={t("structure.file-upload-button-text")}
            onChange={(fileList) => {
              onAddFile(fileList as FileList);
            }}
          />
          <Button variant="white-contain" size="medium" disabled={showQuiz} onClick={onAddQuiz}>
            + {t("structure.lecture-add-quiz")}
          </Button>
        </Box>
      </Box>
      <DialogModal
        open={openModal}
        title={t("structure.dialog_modal_delete_lecture")}
        showCloseButtonIcon
        primaryButtonText={dialogModalT("dialog_modal_agree")}
        secondaryButtonText={dialogModalT("dialog_modal_disagree")}
        handleAgree={onDeleteLecture}
        handleClose={onCloseModal}
      />
    </Stack>
  );
};

export default BlockLecture;
