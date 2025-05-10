import Image from 'next/image';
import planetImg from "@/app/Tihod_photo_2.png";
export default function Dashboard() {
	return (
		<div >
			<Image
				src={planetImg}
				alt="Pink planet in space"
				width={500}
				height={500}
			/>
		</div>
	);
}
