export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-24 flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <p className="mt-4 text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}

