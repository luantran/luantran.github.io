import { FaChevronDown } from 'react-icons/fa'

function SectionArrow({ targetSection }) {
    return (
        <div className="flex justify-center pb-4">
            <a
                href={`#${targetSection}`}
                className="text-white hover:text-blue-400 transition-colors animate-bounce"
            >
                <FaChevronDown className="text-3xl" />
            </a>
        </div>
    )
}

export default SectionArrow