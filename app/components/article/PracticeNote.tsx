interface PracticeNoteProps {
  title: string;
  children: React.ReactNode;
}

export function PracticeNote({ title, children }: PracticeNoteProps) {
  return (
    <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 my-8">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#D4AF37] mb-4">{title}</h3>
          <div className="text-gray-300 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
