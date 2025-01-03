"use client";

import { useEffect, useState } from "react";

export default function useCustomMediaQuery(mediaQueryString) {
	const [matches, setMatches] = useState(null);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(mediaQueryString);
		const listener = () => setMatches(!!mediaQueryList.matches);
		listener();
		mediaQueryList.addListener(listener);
		return () => mediaQueryList.removeListener(listener);
	}, [mediaQueryString]);

	return matches;
}
