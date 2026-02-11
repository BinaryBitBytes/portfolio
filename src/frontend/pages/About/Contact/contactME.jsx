function ContactMe() {
  return (
    <div className="bg-gray-900 relative flex flex-initial py-7 px-7 rounded shadow-md">
      <div className="lg:w-1/2 px-6">
        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
          ADDRESS
        </h2>
        <p className="text-red-400 tracking-widest text-xs mt-1">
          Newnan, GA 30265
        </p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
          EMAIL
        </h2>
        <a
          className="text-indigo-400 leading-relaxed tracking-widest text-xs"
          href="email-address"
        >
          117MWC117@GMAIL.COM
        </a>
        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
          PHONE
        </h2>
        <p className="text-indigo-400 leading-relaxed tracking-widest text-xs">
          678-675-6882
        </p>
      </div>
    </div>
  );
}
export default ContactMe;
