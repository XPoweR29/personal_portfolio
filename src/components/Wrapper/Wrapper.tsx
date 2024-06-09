import { ReactNode } from "react";
import styles from "./Wrapper.module.scss";

interface Props {
  className?: string;
  children: ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};

export default Wrapper;
