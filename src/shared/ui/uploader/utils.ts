export const convertBytesToMb = (fileSize: number): number => {
  const kmInMb = 1024;
  return +(fileSize / (kmInMb * kmInMb)).toFixed(2);
};

export const convertKbToMb = (fileSize: number): number => {
  const kmInMb = 1024;
  return +(fileSize / kmInMb).toFixed(2);
};

export const getUploadedFile = (file: File, fileSize: number): FileReader => {
  const fileReader = new FileReader();
  const sizeInMB = convertBytesToMb(file.size);
  const fileSizeInMB = convertKbToMb(fileSize);

  if (sizeInMB > fileSizeInMB) {
    throw new Error(`Error, size of file more then out of limit ${sizeInMB}MB / ${convertKbToMb(fileSize)}MB`);
  }

  fileReader.readAsDataURL(file as File);
  return fileReader;
};
