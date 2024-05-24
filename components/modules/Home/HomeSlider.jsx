"use client";

import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./HomeSliderButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";

const slides = [
	{
		id: 1,
		title: "گاو شیری",
		subTitle: "گاو شیری اصلاح نژاد دام و طیور",
		url: "#",
		direction: "right",
		image: "/images/home-slide-1.webp",
	},
	{
		id: 2,
		title: "گاو گوشتی",
		subTitle: "گاو گوشیتی اصلاح نژاد دام و طیور",
		url: "#",
		direction: "left",
		image: "/images/home-slide-2.webp",
	},
];

const options = { direction: "rtl", loop: true, speed: 700 };

const HomeSlider = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	const onNavButtonClick = useCallback((emblaApi) => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop;

		resetOrStop();
	}, []);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi,
		onNavButtonClick
	);

	return (
		<Box sx={{ paddingBottom: "50px" }} id="slider">
			<section className="embla home-slider" dir="rtl">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{slides.map((item, index) => (
							<div
								className={
									item.direction === "right"
										? "embla__slide slide-right"
										: "embla__slide slide-left"
								}
								key={index}
							>
								<div className="embla__slide__content">
									<Typography
										variant="h2"
										gutterBottom
										sx={{ color: "#fff" }}
									>
										{item.title}
									</Typography>
									<Typography
										variant="subtitle1"
										gutterBottom
										sx={{
											color: "#fff",
											marginBottom: "2rem",
										}}
									>
										{item.subTitle}
									</Typography>
									<Button
										variant="contained"
										color="secondary"
										startIcon={<ChevronLeftIcon />}
									>
										<Link href={item.url}>
											اطلاعات بیشتر
										</Link>
									</Button>
								</div>
								<div className="embla__slide__image">
									<Image
										src={item.image}
										alt={item.title}
										fill
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="embla__controls">
					<div className="embla__dots">
						{scrollSnaps.map((_, index) => (
							<DotButton
								key={index}
								onClick={() => onDotButtonClick(index)}
								className={"embla__dot".concat(
									index === selectedIndex
										? " embla__dot--selected"
										: ""
								)}
							/>
						))}
					</div>
				</div>
			</section>
		</Box>
	);
};

export default HomeSlider;
