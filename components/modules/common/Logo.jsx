import Image from "next/image";

export default function Logo({ width, height, dark = false }) {
	return (
		<Image
			src={dark ? "/logo1.png" : "/logo1.png"}
			alt="مبارک اندیش"
			width={width ? width : 250}
			height={height ? height : 66}
		/>
	);
}
