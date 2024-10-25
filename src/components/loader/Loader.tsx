import type { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return <ClipLoader color="#2572ed" size={56} />;
};

export default Loader;
