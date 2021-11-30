import styles from './index.less';
import Editor from '../components/Editor';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>flag</h1>
      <Editor />
    </div>
  );
}
