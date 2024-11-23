export const pathAnimationEvent = () =>
  new Promise<void>((resolve) => {
    console.log("Path Animation 시작");
    setTimeout(() => {
      console.log("Path Animation 종료");
      resolve();
    });
  });

export const randomEvent = () =>
  new Promise<void>((resolve) => {
    console.log("Random Event 시작");
    setTimeout(() => {
      console.log("Random Event 종료");
      resolve();
    }, 1800);
  });
