import type { CSSProperties } from "react";
import { RepositoryLink } from "../../components/link";
import { Popover } from "../../components/popover";
import styles from "./index.module.css";

export default function Page() {
  return (
    <>
      <RepositoryLink path="/tree/main/src/pages/parallax-elements" />
      <Popover>
        <p>
          物理的に、前景レイヤーの画像が背景レイヤーの画像よりも速く動くようにする方が自然な見た目になるので適切な調整を行う
        </p>
      </Popover>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Parallax elements with animation timeline</h1>
        </section>
        <section className={styles.parallax}>
          <img
            className={styles.item}
            style={
              {
                inlineSize: "80cqi",
                insetBlockStart: "4cqb",
                insetInlineStart: "8cqi",
              } as CSSProperties
            }
            src={`/images/4.jpg.webp`}
            data-size="lg"
            width={1920}
            height={2560}
            alt=""
          />
          <img
            className={styles.item}
            style={
              {
                inlineSize: "65cqi",
                insetBlockStart: "50cqb",
                insetInlineEnd: "1cqi",
              } as CSSProperties
            }
            src={`/images/5.jpg.webp`}
            data-size="lg"
            width={1920}
            height={2560}
            alt=""
          />
          <img
            className={styles.item}
            style={
              {
                inlineSize: "50cqi",
                insetBlockEnd: "10cqb",
                insetInlineStart: "12cqi",
              } as CSSProperties
            }
            src={`/images/6.jpg.webp`}
            data-size="lg"
            width={1920}
            height={2560}
            alt=""
          />
          <img
            className={styles.item}
            style={
              {
                inlineSize: "60cqi",
                insetBlockStart: "-10cqb",
                insetInlineEnd: "4cqi",
              } as CSSProperties
            }
            src={`/images/7.jpg.webp`}
            data-size="md"
            width={1920}
            height={1280}
            alt=""
          />
          <img
            className={styles.item}
            style={
              {
                inlineSize: "50cqi",
                insetBlockStart: "30cqb",
                insetInlineStart: "20cqi",
              } as CSSProperties
            }
            src={`/images/8.jpg.webp`}
            data-size="md"
            width={1920}
            height={1280}
            alt=""
          />
          {/*<img
            className={styles.item}
            style={{
              insetBlockEnd: '30cqb', insetInlineStart: '12cqi'
            } as CSSProperties}
            src={`/images/12.jpg.webp`}
            data-size="md"
            width={1920}
            height={1280}
            alt=""
          />*/}
          <img
            className={styles.item}
            style={
              {
                inlineSize: "40cqi",
                insetBlockStart: "10cqb",
                insetInlineStart: "2cqi",
              } as CSSProperties
            }
            src={`/images/1.jpg.webp`}
            data-size="sm"
            width={1920}
            height={2880}
            alt=""
          />
          <img
            className={styles.item}
            style={
              {
                inlineSize: "30cqi",
                insetBlockStart: "50cqb",
                insetInlineEnd: "13cqi",
              } as CSSProperties
            }
            src={`/images/3.jpg.webp`}
            data-size="sm"
            width={1920}
            height={2880}
            alt=""
          />
        </section>
        <section className={styles.footer}>
          <p>Some images used on this site are provided by Unsplash.</p>
        </section>
      </div>
    </>
  );
}
