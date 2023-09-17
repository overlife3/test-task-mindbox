export const keyDownEnter = (cl: () => void, event: any) => {
  if (event.key === "Enter") {
    cl();
  }
};
