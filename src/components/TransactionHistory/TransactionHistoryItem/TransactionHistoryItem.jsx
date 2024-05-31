import { Td } from './TransactionHistoryItem.styled';
import { Tr } from '../TransactionHistory.styled';


const TransactionHistoryItem = ({ items }) => {

  const transactionHistoryItem = items.map((item) =>

    <Tr key={item.id}>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </Tr>)
  return transactionHistoryItem;
};
export default TransactionHistoryItem;
