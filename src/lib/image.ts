export const generateBlurUrl = (imageUrl: string): string => {
  const [base, rest] = imageUrl.split("/upload/");
  const blurParams = "w_10,h_7,c_fill,e_blur:1000,q_1";

  return `${base}/upload/${blurParams}/${rest}`
}
