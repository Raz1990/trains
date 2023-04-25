import { getData } from "@/app/utils/serverOnlyFunctions";
import styles from "./page.module.scss";
import ContentContainer from "@/app/components/ClientComponents/ContentContainer/ContentContainer";

export default async function GenevaPage() {
  const data = await getData("departure");

  return (
    <main className={styles.genevaPage}>
      <ContentContainer data={data} />
    </main>
  );
}
