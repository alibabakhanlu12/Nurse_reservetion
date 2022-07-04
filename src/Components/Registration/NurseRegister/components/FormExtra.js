import { Link } from 'react-router-dom';

export default function FormExtra() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-600">
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <Link to="#" className="font-medium text-blue-600 hover:text-blue-300">
          Forgot your password?
        </Link>
      </div>
    </div>

  )
}