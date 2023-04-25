import { getData } from "@/app/utils/serverOnlyFunctions";
import styles from "./page.module.scss";
import ContentContainer from "@/app/components/ClientComponents/ContentContainer/ContentContainer";

export default async function BaselPage() {
  const data = await getData("departure");

  return (
    <main className={styles.baselPage}>
      <ContentContainer data={data} />
    </main>
  );
}
