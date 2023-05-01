import { getData } from "@/app/utils/serverOnlyFunctions";
import styles from "./page.module.scss";
import ContentContainer from "@/app/components/ClientComponents/ContentContainer/ContentContainer";
import { store } from "@/store/store";
import Providers from "@/app/components/ClientComponents/Provider";
import Preloader from "@/app/components/ClientComponents/Preloader";
import { setData } from "@/store/dataSlice";

export default async function GenevaPage() {
  const data = await getData("geneva", "departure");
  store.dispatch(setData(data));

  return (
    <main className={styles.genevaPage}>
      <Preloader data={data} />
      <Providers>
        <ContentContainer station="geneva" />
      </Providers>
    </main>
  );
}
