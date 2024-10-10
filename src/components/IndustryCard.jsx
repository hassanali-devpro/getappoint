const IndustryCard = (props) => {
  return (
    <div className='bg-[#10C9C3] text-white shadow-2xl shadow-[#10C9C3] rounded-2xl my-5 p-5 w-[90%]'>
      <div className="font-bold text-2xl mb-2">{props.title}</div>
      <div>{props.text}</div>
    </div>
  );
};

export default IndustryCard;
