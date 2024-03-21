const [transactions, setTransactions] = useState([]);
const { transactions, deleteTransaction } = useBudget();

const deleteTransaction = (index) => {
const updatedTransactions = [...transactions];
updatedTransactions.splice(index, 1);
setTransactions(updatedTransactions};