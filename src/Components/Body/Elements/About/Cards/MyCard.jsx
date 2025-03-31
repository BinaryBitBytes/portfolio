import { ContactInfo } from "../../../../../Data/collection/contactInfo";
function MyCard() {
  return (
    <div className="flex justify-center">
      <a
        href="#contact"
        className="text-center reletive max-h-fit max-w-fit absolute bottom-18 left-10 text-white bg-green-500 border-3 focus:outline-none hover:bg-green-600 rounded text-base"
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
  );
}

export default MyCard;
