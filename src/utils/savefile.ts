const saveAsFile = (str: any, filename: string) => {
  const hiddenElement = document.createElement('a');
  hiddenElement.href =
    filename === '수식 저장.gif'
      ? str
      : `data:attachment/text,${encodeURI(str)}`;
  hiddenElement.target = '_blank';
  hiddenElement.download = filename;
  hiddenElement.click();
};

export default saveAsFile;
