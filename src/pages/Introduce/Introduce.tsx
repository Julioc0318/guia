import { Card } from "antd";
import styles from "./Introduce.module.less";

export const Introduce = () => {
  return (
    <div className={styles.introduce}>
      <Card title="A1 ROOM107">
        <div className={styles.cardContent}>
          <div>
            Gramatica 09:00-11:00
            <br />
            TEACHER: ESP
            <br />
            STUDENTES:A1
          </div>
          <div>
            Comunicacion 11:00-13:00
            <br />
            TEACHER: ESP
            <br />
            STUDENTES LISTS:A1
            <br />
            A2131
            <br />
            213124141
          </div>
        </div>
      </Card>
      <Card title="A2 ROOM107">
        <div className={styles.cardContent}>
          <div>
            Gramatica 09:00-11:00
            <br />
            TEACHER: ESP
            <br />
            STUDENTES:A1
          </div>
          <div>
            Comunicacion 11:00-13:00
            <br />
            TEACHER: ESP
            <br />
            STUDENTES LISTS:A1
            <br />
            A2131
            <br />
            213124141
          </div>
        </div>
      </Card>
    </div>
  );
};
