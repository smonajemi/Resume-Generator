import { Text, View } from '@react-pdf/renderer';
import { styles } from './hooks/styles';

const List = ({ children} : any ) => children;

export const Item = ({ children } : any) => (
  <View style={styles.rowItem}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;