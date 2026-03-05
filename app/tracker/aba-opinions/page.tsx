import Link from 'next/link';

export default function ABAOpinionsPage() {
  const opinions = [
    {
      id: ' Formal Opinion 508',
      title: 'Lawyers Use of Artificial Intelligence in the Practice of Law',
      date: 'July 2024',
      status: 'Current',
      summary: 'Guidance on ethical considerations for lawyers using AI tools in legal practice.'
    },
    {
      id: 'Formal Opinion 499',
      title: 'Confidentiality and Artificial Intelligence',
      date: 'March 2024',
      status: 'Current',
      summary: 'Analysis of confidentiality obligations when using AI-powered legal research tools.'
    },
    {
      id: 'Informal Opinion 23-001',
      title: 'AI Competence and Due Diligence',
      date: 'January 2023',
      status: 'Current',
      summary: 'Requirements for lawyer competence when utilizing AI systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-[120px]">
      <div className="container mx-auto px-4 py-8">
        <Link href="/tracker" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to AI Regulation Tracker
        </Link>
        <h1 className="text-3xl font-bold mb-6">ABA AI Opinions</h1>
        <p className="text-gray-600">
          American Bar Association formal and informal opinions on the use of artificial intelligence in legal practice.
        </p>
      </div>

      <div className="space-y-6">
        {opinions.map((opinion) => (
          <div key={opinion.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{opinion.title}</h2>
                <p className="text-sm text-gray-500">{opinion.id}</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {opinion.status}
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-600 mb-3">{opinion.summary}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">📅 {opinion.date}</span>
                <span>📄 PDF Available</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Key Points:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Competence requirements for AI tool usage</li>
                <li>• Confidentiality and data protection obligations</li>
                <li>• Supervision of AI-assisted legal work</li>
                <li>• Fee arrangements and AI cost disclosure</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2">ABA Model Rules</h3>
            <p className="text-sm text-gray-600">
              Model Rules of Professional Conduct relevant to AI adoption
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">State Bar Adaptations</h3>
            <p className="text-sm text-gray-600">
              How state bars have adapted ABA guidance locally
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
