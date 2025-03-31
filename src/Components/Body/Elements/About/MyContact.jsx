import { ContactInfo } from "../../../../Data/collection/contactInfo";
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
              Email: {ContactInfo.email}
              <br />
              Phone: {ContactInfo.phone}
              <br />
              LinkedIn: {ContactInfo.linkedIn}
              <br />
              GitHub: {ContactInfo.github}
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
