import { motion } from "framer-motion";

const variants = {
	offscreen: {
		y: 300,
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			duration: 2,
		},
	},
};

export default function AnimatedElement({ children }) {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div variants={variants}>{children}</motion.div>
		</motion.div>
	);
}
