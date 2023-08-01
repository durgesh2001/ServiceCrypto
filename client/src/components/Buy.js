import { ethers } from "ethers";
const Buy = ({ state }) => {
  const buyService = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.service(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px",fontWeight: 'bold' }}>
        <form onSubmit={buyService}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name" required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Feedback</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Feedback" required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >Pay
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;
