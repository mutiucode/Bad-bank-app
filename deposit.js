function Deposit() {
  const ctx = React.useContext(UserContext);
  const [deposit, setDeposit] = React.useState('');
  var user = ctx.users[0];
  var balance = user.balance;
  function changeDeposit(event) {
    // your code here
    var target = event.target;
    var value = target.value;
    setDeposit(value);
  }

  function addToDeposit() {
    if (
      !isNaN(deposit) &&
      parseInt(deposit) == parseFloat(deposit) &&
      deposit > 0
    ) {
      const depositAmount = parseInt(deposit);
      user.balance += depositAmount;
      setDeposit('');
    } else {
      console.error('Invalid deposit amount. Please enter a positive integer.');
    }
  }
  return (
    <div>
      <Card
        header={'Deposit'}
        title={<div>balance: {balance}</div>}
        body={
          <div>
            <div>
              <input value={deposit} onChange={changeDeposit}></input>
            </div>
            <div>
              <button onClick={addToDeposit}>Submit</button>
            </div>
          </div>
        }
        bgcolor={'primary'}
        status={'invalid input'}
      ></Card>
    </div>
  );
}
