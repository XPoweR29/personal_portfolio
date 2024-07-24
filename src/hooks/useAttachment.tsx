import React from "react";

export const useAttachment = () => {
	const handleDownload = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();{

			const link: HTMLAnchorElement = document.createElement("a");
			link.href = "/cv_pawel-zydek.pdf";
			link.setAttribute("download", "cv_pawel-zydek.pdf");
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	return { handleDownload };
};
