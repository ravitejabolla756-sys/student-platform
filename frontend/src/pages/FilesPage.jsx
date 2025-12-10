import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FileText, Image as ImageIcon, FileType, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/card';

const pdfTools = [
  { id: 'pdf-merge', name: 'PDF Merge', description: 'Combine multiple PDF files into one' },
  { id: 'pdf-split', name: 'PDF Split', description: 'Split PDF into separate pages' },
  { id: 'pdf-compress', name: 'PDF Compress', description: 'Reduce PDF file size' },
  { id: 'pdf-lock', name: 'PDF Lock', description: 'Add password protection to PDF' },
  { id: 'pdf-unlock', name: 'PDF Unlock', description: 'Remove PDF password protection' },
  { id: 'pdf-reorder', name: 'PDF Page Reorder', description: 'Rearrange PDF pages' },
  { id: 'pdf-to-images', name: 'PDF to Images', description: 'Convert PDF pages to images' },
  { id: 'images-to-pdf', name: 'Images to PDF', description: 'Create PDF from images' },
  { id: 'png-to-jpg', name: 'PNG to JPG', description: 'Convert PNG images to JPG' },
  { id: 'jpg-to-png', name: 'JPG to PNG', description: 'Convert JPG images to PNG' },
  { id: 'word-to-pdf', name: 'Word to PDF', description: 'Convert Word documents to PDF' },
  { id: 'pdf-to-word', name: 'PDF to Word', description: 'Convert PDF to Word document' },
];

const imageTools = [
  { id: 'image-resizer', name: 'Image Resizer', description: 'Resize images to specific dimensions' },
  { id: 'image-cropper', name: 'Image Cropper', description: 'Crop images to desired area' },
  { id: 'image-compressor', name: 'Image Compressor', description: 'Reduce image file size' },
];

const FilesPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const renderToolCard = (tool, index) => (
    <div
      key={tool.id}
      className={`transform transition-all duration-500 delay-${index * 50} ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <Card
        onClick={() => navigate(`/tool/${tool.id}`)}
        className={`group p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover:shadow-2xl hover:${theme.glowHover} transition-all duration-300 cursor-pointer hover:-translate-y-1`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${theme.accent}`}>
            <FileText className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className={`text-lg font-bold ${theme.text} mb-2 group-hover:bg-gradient-to-r group-hover:${theme.accent} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
          {tool.name}
        </h3>
        <p className={`text-sm ${theme.textMuted} mb-4`}>{tool.description}</p>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${theme.accent} text-white text-sm font-medium group-hover:shadow-lg transition-all duration-300`}
        >
          Open Tool
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </Card>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div
        className={`transform transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h1 className={`text-5xl font-bold ${theme.text} mb-3 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>
          File Management
        </h1>
        <p className={`text-xl ${theme.textMuted}`}>Manage, convert, compress, and organize your files easily</p>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.accent}`}>
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-3xl font-bold ${theme.text}`}>PDF Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfTools.map((tool, index) => renderToolCard(tool, index))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.accent}`}>
              <ImageIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-3xl font-bold ${theme.text}`}>Image Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageTools.map((tool, index) => renderToolCard(tool, index + pdfTools.length))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilesPage;