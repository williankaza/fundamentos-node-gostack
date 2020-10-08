import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO{
  title: string, 
  value: number,
  type: 'income' | 'outcome'
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = []
    /*
    this.transactions = [ {
      id: '9728d1fd-4c8d-4d7a-9531-0c34192e98fe',
      title: 'Loan',
      value: 1200,
      type: 'income'
    },
     {
      id: '1161913d-36c8-47b1-8b5e-7ce8b5084fd4',
      title: 'Salary',
      value: 3000,
      type: 'income'
    },
     {
      id: '0c18ab95-c2b5-46ba-8631-1070466ae9f2',
      title: 'Bicycle',
      value: 1500,
      type: 'outcome'
    }];*/
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const lsTransactions: Transaction[] = [...this.transactions]
    const balance = this.transactions.reduce((accumulator: Balance, transaction: Transaction)=>{
      if (transaction.type === 'income'){
        accumulator.income += transaction.value
      } else if (transaction.type === 'outcome'){
        accumulator.outcome += transaction.value
      }
      accumulator.total = accumulator.income - accumulator.outcome
      return accumulator;
    }, {
      income: 0,
      outcome: 0,
      total:0
    })

    return balance;
  }

  public create({
    title, value, type
  }: TransactionDTO): Transaction {
    const transaction: Transaction = new Transaction({
      title, value, type
    })

    this.transactions.push(transaction)
    return transaction;
  }
}

export default TransactionsRepository;
