export const pathAnimationEvent = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    });
  });

export const chatEvent = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
