export const handleDeckChanged = (data: string, context: any) => {
  context.setDeckSize(parseInt(data, 10));
};
