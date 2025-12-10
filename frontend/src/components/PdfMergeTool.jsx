import React, { useState } from "react";

const PdfMergeTool = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFiles(e.target.files);
  };

  const mergePdf = async () => {
    if (files.length < 2) {
      alert("Select at least 2 PDFs");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    for (let file of files) {
      formData.append("files", file);
    }

    const res = await fetch("http://localhost:5000/api/pdf/merge", {
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
    <div style={{ padding: "40px" }}>
      <h2>PDF Merge</h2>

      <input
        type="file"
        accept="application/pdf"
        multiple
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={mergePdf} disabled={loading}>
        {loading ? "Merging..." : "Merge PDFs"}
      </button>
    </div>
  );
};

export default PdfMergeTool;

