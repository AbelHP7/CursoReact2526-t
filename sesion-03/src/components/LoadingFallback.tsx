
interface LoadingFallbackProps {
  message?: string
}

const LoadingFallback = ({ message = "Loading..." }: LoadingFallbackProps) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-2
            border-blue-800 mx-auto mb-4'>

        </div>
        <p className='text-xl font-semibold text-gray-700'>{message}</p>
      </div>
    </div>

  )
}

export default LoadingFallback
