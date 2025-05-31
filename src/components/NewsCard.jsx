function NewsCard({ title, date, summary, source, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        
        <p className="mt-2 text-gray-600">{summary}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">Source: {source}</span>
          
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-50 hover:bg-primary-100"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
