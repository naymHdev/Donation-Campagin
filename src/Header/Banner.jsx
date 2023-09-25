const Banner = () => {
  return (
    <div
      className="hero h-[50vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/sHwLwYn/doctor-vacation.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-black text-2xl font-bold">I Grow By Helping People In Need</h1>
          <div className="flex justify-center items-center">
            <input
              className="p-3 rounded-md lg:px-9"
              type="search"
              name=""
              id=""
              placeholder="Search here...."
            />
            <button className="btn rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-red-600 border-none ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
