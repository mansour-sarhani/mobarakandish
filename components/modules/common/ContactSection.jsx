import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Container from "@mui/material/Container";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactSection() {
	return (
		<Box id="contact">
			<div className="contact-image"></div>
			<Container>
				<Box className="contact-content">
					<Typography
						variant="h3"
						gutterBottom
						textAlign="center"
						color="primary"
					>
						برای اطلاعات بیشتر با ما تماس بگیرید.
					</Typography>
					<List
						sx={{
							width: "100%",
						}}
					>
						<ListItem>
							<ListItemAvatar>
								<Avatar sx={{ bgcolor: "#ff6f00" }}>
									<PhoneEnabledIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primaryTypographyProps={{
									color: "#ff6f00",
									textAlign: "right",
								}}
								secondaryTypographyProps={{
									color: "#fff",
									textAlign: "right",
								}}
								primary="شماره تماس"
								secondary="	66436841 – 021"
							/>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar sx={{ bgcolor: "#ff6f00" }}>
									<PhoneEnabledIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primaryTypographyProps={{
									color: "#ff6f00",
									textAlign: "right",
								}}
								secondaryTypographyProps={{
									color: "#fff",
									textAlign: "right",
								}}
								primary="شماره تماس"
								secondary="	66946986 – 021"
							/>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar sx={{ bgcolor: "#ff6f00" }}>
									<EmailIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primaryTypographyProps={{
									color: "#ff6f00",
									textAlign: "right",
								}}
								secondaryTypographyProps={{
									color: "#fff",
									textAlign: "right",
								}}
								primary="پست الکترونیک"
								secondary="info@mobarakandish.com"
							/>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar sx={{ bgcolor: "#ff6f00" }}>
									<PinDropIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primaryTypographyProps={{
									color: "#ff6f00",
									textAlign: "right",
								}}
								secondaryTypographyProps={{
									color: "#fff",
									textAlign: "right",
								}}
								primary="آدرس"
								secondary="	تهران، بالاتر از بلوار کشاورز، خيابان جمالزاده شمالی
ساختمان ۳۴۱، واحد ۵ و ۶"
							/>
						</ListItem>
					</List>
				</Box>
			</Container>
		</Box>
	);
}
