
import { useState } from 'react';

function App() {
  // State to manage expenses, form inputs, and search term
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // form submission to add a new expense
  const addExpense = (e) => {
    e.preventDefault();
    if (amount && description) {
      setExpenses([...expenses, { amount: parseFloat(amount), description, id: Date.now() }]);
      setAmount('');
      setDescription('');
    }
  };

  // Handle deleting an expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  // Filter expenses based on search term (matches description)
  const filteredExpenses = expenses.filter((exp) =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center p-6 font-sans">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 drop-shadow-md animate-fadeIn">
        Expense Tracker
      </h1>

      {/* Form to add new expense  */}
      <form
        onSubmit={addExpense}
        className="bg-white p-6 rounded-xl shadow-2xl border border-gray-200 mb-8 w-full max-w-3xl transform transition-all hover:scale-105"
      >
        <div className="flex flex-col gap-4 sm:flex-row items-center">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            step="0.01"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-1/3 transition duration-300"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-1/3 transition duration-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Add Expense
          </button>
        </div>
      </form>

      {/* Search Bar with modern styling */}
      <div className="w-full max-w-2xl mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by description..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent shadow-sm transition duration-300 placeholder-gray-400"
        />
      </div>

      {/* Expenses Table  */}
      <div className="w-full max-w-3xl">
        <table className="w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <thead>
            <tr className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
              <th className="p-4 text-left font-semibold">Description</th>
              <th className="p-4 text-left font-semibold">Amount (Ksh)</th>
              <th className="p-4 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((exp) => (
                <tr
                  key={exp.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition duration-200 cursor-pointer"
                >
                  <td className="p-4">{exp.description}</td>
                  <td className="p-4 font-medium text-gray-800">Ksh{exp.amount.toFixed(2)}</td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteExpense(exp.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500 bg-gray-50">
                  No expenses matching the search term.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Total with  */}
      <h3 className="mt-8 text-3xl font-bold text-gray-800 bg-white p-4 rounded-lg shadow-md w-full max-w-3xl text-center transform hover:scale-105 transition duration-300">
        Total: Ksh{expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)}
      </h3>
    </div>
  );
}

export default App;