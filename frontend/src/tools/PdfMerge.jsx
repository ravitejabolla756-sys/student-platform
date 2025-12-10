import React, { useState } from "react";

const PdfMerge = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL =
  import.meta.env.PROD
    ? "https://student99-backend.onrender.com/api/pdf/merge"
    : "http://localhost:5000/api/pdf/merge";
    
  const handleChange = (e) => {
    setFiles(e.target.files);
  };

  const mergePdf = async () => {
    if (files.length < 2) {
      alert("Select at least 2 PDF files");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    for (const file of files) {
      formData.append("files", file);
    }

    const res = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "merged.pdf";
    a.click();

    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">PDF Merge</h2>

      <input
        type="file"
        accept="application/pdf"
        multiple
        onChange={handleChange}
        className="mb-4"
      />

      <button
        onClick={mergePdf}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {loading ? "Merging..." : "Merge PDFs"}
      </button>
    </div>
  );
};

export default PdfMerge;

