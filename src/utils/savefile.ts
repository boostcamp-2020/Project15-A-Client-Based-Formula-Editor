const saveAsFile = (str: string, filename: string) => {
  const fileLength = filename.length;
  const lastDot = filename.lastIndexOf('.');
  const fileExtension = filename.substring(lastDot + 1, fileLength);
  const hiddenElement = document.createElement('a');
  hiddenElement.href =
    fileExtension === 'gif' ? str : `data:attachment/text,${encodeURI(str)}`;
  hiddenElement.target = '_blank';
  hiddenElement.download = filename;
  hiddenElement.click();
};

export default saveAsFile;
