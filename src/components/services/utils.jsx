export const getAnEmoji = (result) => {
  switch (result) {
    case 0:
      return <p>&#x1F629;</p>;
    case 1:
      return <p>&#x1F91D;</p>;
    case 2:
      return <p>&#x1F973;</p>;
    default:
      break;
  }
};
