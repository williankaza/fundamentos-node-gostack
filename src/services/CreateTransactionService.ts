import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome'
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    if (type === "outcome"){
      const balance = this.transactionsRepository.getBalance();

      if (balance.total < value){
        throw new Error("Não é possivel realizar a retirada de valor maior que o disponivel.");
        
      }
    }

    const transaction = this.transactionsRepository.create({
      title, value, type
    })

    return transaction;
  }
}

export default CreateTransactionService;
