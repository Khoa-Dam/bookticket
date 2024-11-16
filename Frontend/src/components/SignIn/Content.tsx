import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Tính năng vượt trội",
    description:
      "Chuyến bay của chúng tôi dễ dàng điều chỉnh theo nhu cầu của bạn, Tăng tốc thời gian hóa các nhiệm vụ của bạn.",
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Được xây dựng để tồn tại lâu dài",
    description:
      "Trải nghiệm hành trình vô song vượt trội với máy bay mang tên Té sấp mặt .",
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Trải nghiệm người dùng tuyệt vời",
    description:
      "Chuyến đi sợ hãi cùng Cơ trưởng _Nam có hơn 1 tháng kinh nghiệm",
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Chức năng cải tiến",
    description:
      "Sửa chữa tuyệt vời của _Khoa với chỉ vài vết nứt nhỏ trên máy bay",
  },
];

export default function Content() {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        alignSelf: "center",
        gap: 4,
        maxWidth: 450,
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: "medium" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
