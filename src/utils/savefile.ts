const saveAsFile = (str: any, filename: string) => {
  const hiddenElement = document.createElement('a');
  hiddenElement.href = `data:attachment/text,${encodeURI(str)}`;
  hiddenElement.target = '_blank';
  hiddenElement.download = filename;
  hiddenElement.click();
};

export default saveAsFile;
