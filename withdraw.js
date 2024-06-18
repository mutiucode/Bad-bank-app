function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [withdraw, setWithdrawal] = React.useState('');
  const [status, setStatus] = React.useState('');

  var user = ctx.users[0];
  var balance = user.balance;

  function changeWithdrawal(event) {
    var target = event.target;
    var value = target.value;
    setWithdrawal(value);
    // Reset status when input changes
    setStatus('');
  }

  function addToWithdrawal() {
    if (isNaN(withdraw)) {
      setStatus('Withdrawal failed - input is not a number');
    } else if (parseFloat(withdraw) != parseInt(withdraw)) {
      setStatus('Withdrawal failed - input is not an integer');
    } else if (withdraw <= 0) {
      setStatus('Withdrawal failed - input must be a positive number');
    } else if (withdraw > user.balance) {
      setStatus('Withdrawal failed - amount exceeds available balance');
    } else {
      const withdrawalAmount = parseInt(withdraw);
      user.balance = user.balance - withdrawalAmount;
      setWithdrawal('');
      setStatus('Withdrawal successful');
    }
  }

  return (
    <div>
      <Card
        header={'Withdraw'}
        title={<div>balance: {balance}</div>}
        body={
          <div>
            <div>
              <input value={withdraw} onChange={changeWithdrawal}></input>
            </div>
            <div>
              <button onClick={addToWithdrawal}>Submit</button>
            </div>
          </div>
        }
        bgcolor={'primary'}
        status={status}
      ></Card>
    </div>
  );
}
