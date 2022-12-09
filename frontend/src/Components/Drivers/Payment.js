import Loader from './Loader';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-xl p-2 outline-none bg-transparent text-black text-sm white-glassmorphism border-2 border-slate-500"
    />
  );

const Payment=()=>{
    return(
        <div className="block m-auto w-1/2 text-black my-2 pt-12">
        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
        {isLoading
          ? <Loader />
          : (
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] bg-[#3d4f7c] rounded-xl cursor-pointer"
            >
              Send now
            </button>
          )}
      </div>
    )
}

export default Payment;