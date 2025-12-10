import PdfMerge from "../tools/PdfMerge"; 

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, FileText, Youtube, Download, Copy } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';

const ToolPlaceholder = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const toolName = toolId
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const isVideoExplainer = toolId === 'video-explainer';

  // ✅ Render PdfMerge instead of placeholder
if (toolId === "pdf-merge") {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <button
        onClick={() => navigate(-1)}
        className={`flex items-center gap-2 ${theme.textMuted} hover:${theme.text} mb-6`}
      >
        ← Back
      </button>

      <PdfMerge />
    </div>
  );
}


  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div
        className={`transform transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <button
          onClick={() => navigate(-1)}
          className={`flex items-center gap-2 ${theme.textMuted} hover:${theme.text} mb-6 transition-colors duration-300`}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <h1 className={`text-5xl font-bold ${theme.text} mb-3 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>
          {toolName}
        </h1>
        <p className={`text-xl ${theme.textMuted}`}>This tool is coming soon!</p>
      </div>

      {isVideoExplainer ? (
        <div className="space-y-6">
          <div
            className={`transform transition-all duration-700 delay-100 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder}`}>
              <div className="space-y-4">
                <div>
                  <Label className={`${theme.text} mb-2 block`}>YouTube URL</Label>
                  <div className="relative">
                    <Youtube className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textMuted}`} />
                    <Input
                      placeholder="Paste YouTube video URL here..."
                      className={`pl-12 ${theme.cardBg} border ${theme.cardBorder} ${theme.text}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className={`${theme.text} mb-2 block`}>Explanation Level</Label>
                    <Select>
                      <SelectTrigger className={`${theme.cardBg} border ${theme.cardBorder} ${theme.text}`}>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent className={`${theme.cardBg} border ${theme.cardBorder}`}>
                        <SelectItem value="basic" className={`${theme.text} hover:bg-white/5`}>
                          Basic
                        </SelectItem>
                        <SelectItem value="standard" className={`${theme.text} hover:bg-white/5`}>
                          Standard
                        </SelectItem>
                        <SelectItem value="detailed" className={`${theme.text} hover:bg-white/5`}>
                          Detailed
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className={`${theme.text} mb-2 block`}>Output Style</Label>
                    <Select>
                      <SelectTrigger className={`${theme.cardBg} border ${theme.cardBorder} ${theme.text}`}>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent className={`${theme.cardBg} border ${theme.cardBorder}`}>
                        <SelectItem value="summary" className={`${theme.text} hover:bg-white/5`}>
                          Summary
                        </SelectItem>
                        <SelectItem value="bullet" className={`${theme.text} hover:bg-white/5`}>
                          Bullet Notes
                        </SelectItem>
                        <SelectItem value="stepbystep" className={`${theme.text} hover:bg-white/5`}>
                          Step-by-Step
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className={`w-full bg-gradient-to-r ${theme.accent} text-white hover:shadow-lg hover:${theme.glowHover} transition-all duration-300`}>
                  Explain Video
                </Button>
              </div>
            </Card>
          </div>

          <div
            className={`transform transition-all duration-700 delay-200 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-bold ${theme.text}`}>Video Explanation</h3>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`border ${theme.cardBorder} ${theme.text} hover:bg-white/5`}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`border ${theme.cardBorder} ${theme.text} hover:bg-white/5`}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>

                <div className={`p-4 rounded-lg bg-white/5 border ${theme.cardBorder}`}>
                  <p className={`${theme.textMuted} text-center py-8`}>
                    Video explanation will appear here after processing...
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <div
          className={`transform transition-all duration-700 delay-100 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-8 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} text-center`}>
            <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${theme.accent} mb-6`}>
              <FileText className="w-16 h-16 text-white" />
            </div>
            <h2 className={`text-2xl font-bold ${theme.text} mb-4`}>Tool UI Placeholder</h2>
            <p className={`${theme.textMuted} mb-6`}>
              This is a placeholder for the <strong>{toolName}</strong> tool. The actual functionality will be
              implemented in future updates.
            </p>
            <Button
              onClick={() => navigate(-1)}
              className={`bg-gradient-to-r ${theme.accent} text-white hover:shadow-lg hover:${theme.glowHover} transition-all duration-300`}
            >
              Go Back
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ToolPlaceholder;