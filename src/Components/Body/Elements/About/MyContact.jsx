function MyContact() {
  return (
    <div className="place-content-end h-72 content-between-20 ">
      <div className="flex justify-center">
        <a
          href="#contact"
          className="text-center reletive h-32 w-69 absolute bottom-18 left-10 text-white bg-green-500 border-3 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          <p>
            <strong>
              Looking 4 Work
              <br />
              Email:117mwc117@gmail.com
              <br />
              Phone: 678-675-6882
              <br />
              LinkedIn.com/BinaryBitBytes
            </strong>
          </p>
        </a>
      </div>
      <div className="flex justify-center">
        <a
          href="#projects"
          className="reletive h-42 w-65 absolute bottom-18 right-10 ml-56 inline-flex text-gray-400 bg-gray-800 border-3 py-12 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        >
          <strong>Checkout my hard work & projects</strong>
        </a>
      </div>
    </div>
  );
}
export default MyContact;
