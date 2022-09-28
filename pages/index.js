import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MasterIndex from "./master-index/MasterIndex";

export default function Home() {
  return (
    <div>
      <MasterIndex />
    </div>
  );
}
