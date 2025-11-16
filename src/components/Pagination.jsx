export default function Pagination({ total, perPage, page, setPage }) {
  const pageCount = Math.ceil(total / perPage)

   // No need to show pagination if only one page exists
  if (pageCount <= 1) return null

  return (
    <div className="flex gap-2">
      {Array.from({ length: pageCount }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-4 py-2 rounded border ${
            page === i + 1
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}