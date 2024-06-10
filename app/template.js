"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import store from "../redux/store";
import FrontFooter from "@/components/layouts/front/footer/FrontFooter";
import SiteHeader from "@/components/layouts/front/header/SiteHeader";
import Loading from "@/components/modules/common/Loading";

export default function RootTemplate({ children }) {
	const [url, setUrl] = useState();

	const pathname = usePathname();

	useEffect(() => {
		setUrl(pathname);
	}, [pathname]);

	return (
		<Provider store={store}>
			{url ? (
				<>
					<SiteHeader url={url} />
					{children}
					<FrontFooter />
				</>
			) : (
				<Loading />
			)}
		</Provider>
	);
}
