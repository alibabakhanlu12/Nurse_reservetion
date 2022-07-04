import { Link } from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mt-20">
            <div className="flex justify-center">
                <img
                    alt=""
                    className="h-14 w-14"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovrw8AYpGHyl7F_d447eo9UKoPDhwgHFIPw&usqp=CAU" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                {paragraph} {' '}
                <Link to={linkUrl} className="font-medium ">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}