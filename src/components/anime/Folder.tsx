const Folder = () => {
  return (
    <div className="folder group relative w-32 h-20 bg-gray-600 rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] cursor-pointer transition-all duration-300">
      <div className="absolute top-[-12px] w-12 h-4 bg-gray-600 rounded-t-[8px] shadow-md"></div>
      <div className="absolute inset-0 m-auto border-black border w-11/12 h-5/6 bg-gray-200 rounded-lg shadow-md transform scale-y-[1] skew-x-[0deg] transition-transform duration-300 group-hover:skew-x-[-5deg] group-hover:translate-y-[-10px]"></div>
      <div className="absolute inset-0 bg-gray-700 rounded-[8px] origin-bottom-right transform scale-y-[1] skew-x-[0deg] transition-transform duration-300 group-hover:skew-x-[-10deg] group-hover:scale-y-[0.85]"></div>
    </div>
  );
};

export default Folder;
