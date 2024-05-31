import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import { Table, Tbody, Thead, Tr } from './TransactionHistory.styled';

const TransactionHistory = ({items}) => {
  return (
    <Table>
      <Thead>
      <Tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </Tr>
      </Thead>
      <Tbody>
    <TransactionHistoryItem items={items}/>
      </Tbody>
    </Table>
  );
};
export default TransactionHistory;
