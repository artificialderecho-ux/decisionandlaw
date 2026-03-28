export default function UnderConstruction({ section }: { section?: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center 
                    text-center px-6">
      <div className="border border-[#D4AF37]/30 rounded-lg p-12 
                      max-w-lg mx-auto">
        <div className="text-[#D4AF37] text-4xl mb-6">⚖</div>
        <h1 className="text-2xl font-bold text-white mb-3">
          {section || 'This Section'} Is Coming Soon
        </h1>
        <p className="text-gray-400 mb-8">
          We're building something worth reading. 
          Check back soon or subscribe to be notified.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/" 
             className="px-5 py-2 bg-[#D4AF37] text-black 
                        font-semibold rounded hover:bg-[#E8C84A] 
                        transition-colors text-sm">
            Back to Home
          </a>
          <a href="/news" 
             className="px-5 py-2 border border-[#D4AF37]/50 
                        text-[#D4AF37] rounded hover:border-[#D4AF37] 
                        transition-colors text-sm">
            Read Latest News
          </a>
        </div>
      </div>
    </div>
  )
}
