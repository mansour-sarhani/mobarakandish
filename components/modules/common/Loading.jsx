import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
	return (
		<div className="loading-overlay">
			<CircularProgress className="loading-progress" />
		</div>
	);
}

export default Loading;
