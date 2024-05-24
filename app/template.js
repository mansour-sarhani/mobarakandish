"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FrontFooter from "@/components/layouts/front/footer/FrontFooter";

import { Provider } from "react-redux";
import store from "../redux/store";
import SiteHeader from "@/components/layouts/front/header/SiteHeader";

export default function Template({ children }) {
	const [url, setUrl] = useState("/");

	const pathname = usePathname();

	useEffect(() => {
		setUrl(pathname);
	}, [pathname]);

	return (
		<Provider store={store}>
			<SiteHeader url={url} />
			{children}
			<FrontFooter />
		</Provider>
	);
}
