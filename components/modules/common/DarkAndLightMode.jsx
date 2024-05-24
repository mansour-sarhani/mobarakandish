"use client";

import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Tooltip } from "@mui/material";
import { toggleTheme } from "@/redux/features/publicSlice";
import { useDispatch } from "react-redux";

const DarkAndLightMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		const storedPreference = localStorage.getItem("theme");
		if (storedPreference === "dark") {
			setIsDarkMode(true);
		}
	}, []);

	const handleToggle = () => {
		setIsDarkMode(!isDarkMode);
		dispatch(toggleTheme(!isDarkMode));
	};

	useEffect(() => {
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");

		const htmlElement = document.querySelector("html");
		if (isDarkMode) {
			htmlElement.classList.add("dark");
		} else {
			htmlElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	return (
		<div className="dark-mode-btn">
			<Tooltip title={`حالت ${isDarkMode ? "روز" : "شب"}`}>
				<IconButton onClick={handleToggle} size="small">
					{isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
				</IconButton>
			</Tooltip>
		</div>
	);
};

export default DarkAndLightMode;
