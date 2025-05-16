export const autoResize = (textarea: HTMLTextAreaElement | null): number => {
  if (!textarea) return 0;
  textarea.style.height = "auto";

  const lines = textarea.value.split("\n");
  const formattedLines = lines
    .map((line) => {
      if (line.length <= 93) return line;
      return line.match(/.{1,93}/g)?.join("\n") || line;
    })
    .join("\n");

  if (textarea.value !== formattedLines) {
    textarea.value = formattedLines;
  }

  const computed = window.getComputedStyle(textarea);
  const paddingTop = parseFloat(computed.paddingTop);
  const paddingBottom = parseFloat(computed.paddingBottom);

  const newHeight = textarea.scrollHeight + paddingTop + paddingBottom;
  textarea.style.height = `${newHeight}px`;

  return newHeight;
};

export const copyToClipBoard = (text: string): Promise<void> => {
  return navigator.clipboard.writeText(text);
};
