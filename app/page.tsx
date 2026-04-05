"use client";
import React, { useState } from 'react';
import { Sparkles, Code2, Play, Eraser } from 'lucide-react';

export default function AIEditor() {
  const [html, setHtml] = useState('<h1>הסימולטור שלי</h1>');
  const [css, setCss] = useState('body { background: #1a1a1a; color: white; font-family: sans-serif; text-align: center; padding-top: 50px; }');
  const [js, setJs] = useState('console.log("הסימולטור מוכן!");');

  const combinedCode = `
    <html>
      <head><style>${css}</style></head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="flex h-screen bg-[#111] text-white overflow-hidden" dir="rtl">
      {/* סרגל צד של קבצים */}
      <div className="w-64 bg-[#1a1a1a] border-l border-white/10 p-4">
        <h2 className="text-xs font-bold text-gray-500 uppercase mb-4">קבצים</h2>
        <div className="space-y-2">
          <div className="p-2 bg-white/5 rounded text-sm flex items-center gap-2 border-r-2 border-blue-500">
            <Code2 size={16} /> index.html
          </div>
          <div className="p-2 hover:bg-white/5 rounded text-sm flex items-center gap-2 text-gray-400 cursor-pointer">
            <Code2 size={16} /> style.css
          </div>
        </div>
        
        <button className="w-full mt-8 bg-blue-600 hover:bg-blue-500 p-3 rounded-lg flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-blue-900/20">
          <Sparkles size={18} /> AI Fix
        </button>
      </div>

      {/* אזור העורך */}
      <div className="flex-1 flex flex-col border-l border-white/10">
        <div className="p-3 border-b border-white/10 flex justify-between items-center bg-[#1a1a1a]">
          <span className="text-sm text-gray-400">עורך קוד</span>
          <div className="flex gap-2">
            <button onClick={() => setHtml('')} className="p-1.5 hover:bg-white/10 rounded"><Eraser size={16}/></button>
          </div>
        </div>
        <textarea 
          className="flex-1 bg-transparent p-6 font-mono text-sm outline-none resize-none"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          spellCheck="false"
        />
      </div>

      {/* תצוגה מקדימה (המשחק) */}
      <div className="flex-1 bg-white">
        <iframe 
          title="preview"
          className="w-full h-full border-none"
          srcDoc={combinedCode}
        />
      </div>
    </div>
  );
}
