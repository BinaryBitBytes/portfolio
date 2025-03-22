import { ArrowRightIcon } from '@heroicons/react/solid';

function contactNav() {
  return (
    <div>
      <a
        href="#contact"
        className="inline-flex items-center bg-green-900 hover:text-purple-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0"
      >
        Hire Me & Looking To Work
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}

export default contactNav;
