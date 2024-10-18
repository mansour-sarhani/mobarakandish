"use client";

import { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { toggleLanguage } from "@/redux/features/publicSlice";
import { useDispatch, useSelector } from "react-redux";

const LanguageBtn = () => {
	const [currentLanguage, setCurrentLanguage] = useState(() => {
		if (typeof window !== "undefined" && window.localStorage) {
			const savedLang = localStorage.getItem("lang");
			if (savedLang) {
				return savedLang;
			}
		}
		return "fa";
	});

	const lang = useSelector((state) => state.public.lang);
	const dispatch = useDispatch();

	const handleToggle = () => {
		const newLang = currentLanguage === "fa" ? "en" : "fa";
		setCurrentLanguage(newLang);
		localStorage.setItem("lang", newLang);
	};

	useEffect(() => {
		dispatch(toggleLanguage({ lang: currentLanguage }));
	}, [currentLanguage]);

	useEffect(() => {
		const htmlElement = document.querySelector("html");
		htmlElement.lang = lang;
	}, [lang]);

	return (
		<div className="header-btn">
			<Tooltip title={lang === "fa" ? "English" : "فارسی"}>
				<IconButton onClick={handleToggle} size="small">
					{lang === "fa" ? "EN" : "FA"}
				</IconButton>
			</Tooltip>
		</div>
	);
};

export default LanguageBtn;
