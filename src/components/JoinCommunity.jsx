const JoinCommunity = () => {
  return (
    <div className="m-1 p-1 p-md-3 m-md-3 m-lg-5 p-lg-5">
      <div className="p-4 border rounded">
        <p className="my-2 fs-4 fw-semibold fst-italic">Your <span className="text-lilac">Hobby</span>, Your <span className="text-info">Community...</span></p>
        <button className="my-4 bg-lilac text-light fw-bold border-0 rounded-2 p-2">Get Started</button>
        <img className="w-100" src="/public/community.png" alt="" />
      </div>
    </div>
  );
};

export default JoinCommunity;
