"use client";

import { useEffect, useState, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";

export default function HomeMenu() {
	const [activeMenu, setActiveMenu] = useState("#home");

	const handleClick = (e, href) => {
		e.preventDefault();
		let targetElement = document.querySelector(href);
		const headerOffset = 180;
		let elementPosition = targetElement.offsetTop;

		while (targetElement.offsetParent) {
			targetElement = targetElement.offsetParent;
			elementPosition += targetElement.offsetTop;
		}

		const offsetPosition = elementPosition - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});

		setActiveMenu(href);
	};

	const sectionRefs = useRef({});

	const sections = ["#home", "#about", "#fields", "#services", "#contact"];

	useEffect(() => {
		if (typeof window !== "undefined") {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveMenu(`#${entry.target.id}`);
						}
					});
				},
				{ threshold: 0.3 }
			);

			sections.forEach((id) => {
				const element = document.querySelector(id);
				if (element) {
					sectionRefs.current[id] = element;
					observer.observe(element);
				}
			});

			return () => {
				sections.forEach((id) => {
					if (sectionRefs.current[id]) {
						observer.unobserve(sectionRefs.current[id]);
					}
				});
			};
		}
	}, [sections]);

	return (
		<div className="header-menu home-menu">
			<nav aria-label="Home Menu" className="menu-nav">
				<ul className="menu-list">
					<li
						className={`menu-item ${
							activeMenu === "#home" ? "active-menu" : ""
						}`}
					>
						<a
							href="#home"
							onClick={(e) => handleClick(e, "#home")}
							className="menu-link"
							style={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<HomeIcon />
							خانه
						</a>
					</li>
					<li
						className={`menu-item ${
							activeMenu === "#about" ? "active-menu" : ""
						}`}
					>
						<a
							href="#about"
							onClick={(e) => handleClick(e, "#about")}
							className="menu-link"
						>
							درباره ما
						</a>
					</li>
					<li
						className={`menu-item ${
							activeMenu === "#fields" ? "active-menu" : ""
						}`}
					>
						<a
							href="#fields"
							onClick={(e) => handleClick(e, "#fields")}
							className="menu-link"
						>
							حوزه های فعالیت
						</a>
					</li>
					<li
						className={`menu-item ${
							activeMenu === "#services" ? "active-menu" : ""
						}`}
					>
						<a
							href="#services"
							onClick={(e) => handleClick(e, "#services")}
							className="menu-link"
						>
							خدمات تخصصی
						</a>
					</li>
					<li
						className={`menu-item ${
							activeMenu === "#contact" ? "active-menu" : ""
						}`}
					>
						<a
							href="#contact"
							onClick={(e) => handleClick(e, "#contact")}
							className="menu-link"
						>
							تماس با ما
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
