import Profile from './Profile/Profile';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';




export const App = () => {
  return (
  <main>
    <Profile user={user}/>
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>
  </main>
  );
};
