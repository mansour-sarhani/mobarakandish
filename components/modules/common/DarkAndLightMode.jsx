"use client";

import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Tooltip } from "@mui/material";
import { toggleTheme } from "@/redux/features/publicSlice";
import { useDispatch, useSelector } from "react-redux";

const DarkAndLightMode = () => {
	const [currentTheme, setCurrentTheme] = useState(() => {
		if (typeof window !== "undefined" && window.localStorage) {
			const savedTheme = localStorage.getItem("theme");
			if (savedTheme) {
				return savedTheme;
			}
		}
		return "light";
	});

	const theme = useSelector((state) => state.public.theme);
	const dispatch = useDispatch();

	const handleToggle = () => {
		const newTheme = currentTheme === "light" ? "dark" : "light";
		setCurrentTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		if (currentTheme !== theme) {
			dispatch(toggleTheme({ theme: currentTheme }));
		}
	}, [currentTheme, theme]);

	useEffect(() => {
		const htmlElement = document.querySelector("html");
		if (theme === "dark") {
			htmlElement.classList.add("dark");
		} else {
			htmlElement.classList.remove("dark");
		}
	}, [theme]);

	return (
		<div className="dark-mode-btn">
			<Tooltip title={`حالت ${theme === "dark" ? "روز" : "شب"}`}>
				<IconButton onClick={handleToggle} size="small">
					{theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
				</IconButton>
			</Tooltip>
		</div>
	);
};

export default DarkAndLightMode;
