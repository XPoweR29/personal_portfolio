import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import { join } from "path";

const inputPath = join(process.cwd(), "public/assets/*.{jpg,png,webp}");
const outputPath = join(process.cwd(), "public/assets/optimized");

(async () => {
	await imagemin([inputPath], {
		destination: outputPath,
		plugins: [
			imageminWebp({
				quality: 90,
			}),
		],
	});

	console.log("Images has been optimized!");
})();
